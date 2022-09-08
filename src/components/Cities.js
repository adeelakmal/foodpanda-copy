import React from "react";
// import useWindowDimensions from "./Dimentions";

function Cities() {
  // const { width } = useWindowDimensions();
  const cities = [
    require("./img/Lahore.webp"),
    require("./img/karachi.webp"),
    require("./img/Islamabad.webp"),
    require("./img/Faisalabad.webp"),
    require("./img/Rawalpindi.webp"),
  ];

  return (
    <>
      <div className="mt-[10%] ml-12">
        <div className="relative">
          <h2
            className="relative bottom-6 font-Open font-bold leading-small text-blackG/10 px-12 pl-20"
            style={{ fontSize: "10rem" }}
          >
            Cities
          </h2>
          <span
            className="absolute text-lg font-light  pl-20 top-0"
            style={{ fontSize: "27px" }}
          >
            Find us in these cities and many more!
          </span>

          {/* get the city names and pictures that have already been stored in a database use mongo probably */}
        </div>
        <div className="relative bottom-44" style={{ zIndex: "0" }}>
          <ul className="mt-44 mx-20">
            <li>
              <div className="grid grid-flow-col gap-x-5 gird-rows-1 scrollmenu md:grid-flow-row lg:grid-cols-5 md:grid-cols-4">
                <figure className="relative block bg-no-repeat bg-center bg-cover min-w-[150px] overflow-hidden">
                  <img
                    className="object-cover h-[272px]"
                    src={cities[0]}
                    alt="Laor"
                  />
                  <figcaption className="relative bottom-1/4 text-2xl font-bold text-white px-1">
                    Lahore
                  </figcaption>
                  <button className="fwd relative">BUTON</button>
                  <figcaption className="big relative">L</figcaption>
                </figure>
                <figure className="relative block bg-no-repeat bg-center bg-cover min-w-[150px]">
                  <img
                    className="object-cover h-[272px]"
                    src={cities[1]}
                    alt="Laor"
                  />
                  <figcaption className="relative bottom-1/4 text-2xl font-bold text-white px-1">
                    Karachi
                  </figcaption>
                </figure>
                <figure className="relative block bg-no-repeat bg-center bg-cover min-w-[150px]">
                  <img
                    className="object-cover h-[272px]"
                    src={cities[2]}
                    alt="Laor"
                  />
                  <figcaption className="relative bottom-1/4 text-2xl font-bold text-white px-1">
                    Islamabad
                  </figcaption>
                </figure>
                <figure className="relative block bg-no-repeat bg-center bg-cover min-w-[150px]">
                  <img
                    className="object-cover h-[272px]"
                    src={cities[3]}
                    alt="Laor"
                  />
                  <figcaption className="relative bottom-1/4 text-2xl font-bold text-white px-1">
                    Faisalabad
                  </figcaption>
                </figure>
                <figure className="relative block bg-no-repeat bg-center bg-cover min-w-[150px]">
                  <img
                    className="object-cover h-[272px]"
                    src={cities[4]}
                    alt="Laor"
                  />
                  <figcaption className="relative bottom-1/4 text-2xl font-bold text-white px-1">
                    Rawalpindi
                  </figcaption>
                </figure>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cities;
