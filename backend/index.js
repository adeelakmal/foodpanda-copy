// Basic setup
const connection = require("./db");
const express = require("express");
const multer = require("multer");
const CityModel = require("./models/Cities");
connection();
const app = express();
const port = 3000;

/* Setting up middleware */

// Storage is the path where we are going to store the files
const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "img");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname);
  },
});

// Declaring the storage
const upload = multer({ storage: Storage });

/* Configuring routes */

// GET request to retrieve data
app.get("/", (req, res) => {
  CityModel.find({}, (err, items) => {
    try {
      res.render("../public/index", { items: items });
    } catch {
      throw err;
    }
  });
});

// POST request to add data to database
app.post("/", upload.single("image"), (req, res, next) => {
  var city = {
    name: req.body.name,
    image: {
      data: "./img/" + req.file.filename,
      contentType: "image/webp",
    },
  };
  CityModel.create(city, (err, item) => {
    try {
      res.send("Image Uploaded!" + item);
    } catch {
      console.log(err);
    }
  });
});

// app.get("/img", (req, res) => {
//   res.send("");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
