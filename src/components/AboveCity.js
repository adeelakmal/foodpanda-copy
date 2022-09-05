import React from "react";
import useWindowDimensions from "./Dimentions";

export default function AboveCity() {
  const { width } = useWindowDimensions();
  const chef = require("./img/home-vendor-pk.webp");
  if (width < 800) {
    return (
      <>
        <div className="relative mt-24">
          <div className="relative ml-12 bottom-1" style={{ zIndex: "-1" }}>
            <div
              className="absolute text-lg font-light  pl-3 top-0"
              style={{ fontSize: "27px" }}
            >
              {" "}
              You prepare the food, we handle the rest
            </div>
            <div
              className="relative bottom-6 font-Open font-bold leading-small text-blackG/10 px-12 pl-3"
              style={{ fontSize: width / 5, color: "#000000A" }}
            >
              Partners
            </div>
          </div>
          <div style={{ zIndex: "1" }}>
            <img
              className="object-cover w-full h-[404px] z-20"
              src={chef}
              alt="Laor"
            />
          </div>
          <div className="absolute mx-[10%]  border-0 bg-white top-44 shadow text-black font-light">
            <div className="m-6">
              <p className="my-6 mx-1" style={{ fontSize: "1.5rem" }}>
                List your restaurant or shop on foodpanda
              </p>
              <p className="p-1">
                Would you like millions of new customers to enjoy your amazing
                food and groceries? So would we!
              </p>
              <p className="p-1">
                It's simple: we list your menu and product lists online, help
                you process orders, pick them up, and deliver them to hungry
                pandas – in a heartbeat!
              </p>
              <p className="p-1">
                Interested? Let's start our partnership today!
              </p>
              <div className="flex justify-end">
                <button className="buttonGetstarted py-2">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="relative mt-24">
          <div className="relative ml-12 bottom-1" style={{ zIndex: "-1" }}>
            <div
              className="absolute text-lg font-light  pl-20 top-0"
              style={{ fontSize: "27px" }}
            >
              {" "}
              You prepare the food, we handle the rest
            </div>
            <div
              className="relative bottom-6 font-Open font-bold leading-small text-blackG/10 px-12 pl-20 "
              style={{ fontSize: "10rem", color: "#000000A" }}
            >
              Partners
            </div>
          </div>
          <div style={{ zIndex: "1" }}>
            <img
              className="object-cover w-full h-[404px] z-20"
              src={chef}
              alt="Laor"
            />
          </div>
          <div className="absolute ml-32  border-0 max-w-[550px] bg-white top-44 shadow text-black font-light">
            <div className="m-6">
              <p className="my-6 mx-1" style={{ fontSize: "1.5rem" }}>
                List your restaurant or shop on foodpanda
              </p>
              <p className="p-1">
                Would you like millions of new customers to enjoy your amazing
                food and groceries? So would we!
              </p>
              <p className="p-1">
                It's simple: we list your menu and product lists online, help
                you process orders, pick them up, and deliver them to hungry
                pandas – in a heartbeat!
              </p>
              <p className="p-1">
                Interested? Let's start our partnership today!
              </p>
              <div className="flex justify-end">
                <button className="buttonGetstarted py-2">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
