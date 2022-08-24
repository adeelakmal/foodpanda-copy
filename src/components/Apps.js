import React from "react";

function Apps() {
  return (
    <>
      <section className="mt-10" style={{ height: "600px" }}>
        {/* Make this thing into it's own component cuz its repetitive asf */}
        <div className="absolute citiesMargin">
          <h2
            className="relative top-0 font-Open font-bold leading-small text-blackG/20 px-12"
            style={{ fontSize: "10rem" }}
          >
            App
          </h2>
          <span
            className="absolute top-0 text-lg font-light leading-big pl-20"
            style={{ fontSize: "27px" }}
          >
            Put us in your ass
          </span>
        </div>
        <div className="absolute w-full h-[450px] my-20 bg-pink banner">
          <div className="mt-10 ml-20">
            <h1 className=" text-2xl font-Open text-white mb-2">
              Download the food and groceries you love
            </h1>
            <p className="w-1/2 text-white font-light">
              It's all at your fingertips - the restaurants and shops you love.
              Find the right food and groceries to suit your mood, and make the
              first bite last. Go ahead, download us.
            </p>
          </div>
        </div>
        <div className="img2"></div>
      </section>
    </>
  );
}

export default Apps;
