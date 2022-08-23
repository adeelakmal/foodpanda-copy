import React from "react";

function Cities() {
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
        <h2 className="relative top-0 font-Open font-bold leading-small text-blackG/20 px-12 pl-20" style={{fontSize: "10rem"}}>
          Cities
        </h2>
        <span className="absolute text-lg font-light  pl-20 top-0" style = {{fontSize: "27px"}}>
          Find us in these cities and many more!
        </span>

        {/* get the city names and pictures that have already been stored in a database use mongo probably */}
      </div>
      <div className="relative bottom-44" style={{zIndex: "0"}}>
        <ul className="mt-44 mx-20">
          <li>
            <div className="grid grid-rows-1 grid-flow-col gap-6">
              <figure className="relative block h-full bg-no-repeat bg-center bg-cover">
                <img
                  className="object-cover h-[272px] w-[216px] min-h-[150px] min-w-[100px] "
                  src={cities[0]}
                  alt="Laor"
                />
                <figcaption className="relative bottom-1/4 text-4xl font-slim text-white px-1">
                  Lahore
                </figcaption>
              </figure>
              <figure className="relative block h-full bg-no-repeat bg-center bg-cover">
                <img
                  className="object-cover h-[272px] w-[216px] min-h-[150px] min-w-[100px]  "
                  src={cities[1]}
                  alt="Laor"
                />
                <figcaption className="relative bottom-1/4 text-4xl font-slim text-white px-1">
                  karachi
                </figcaption>
              </figure>
              <figure className="relative block h-full bg-no-repeat bg-center bg-cover">
                <img
                  className="object-cover h-[272px] w-[216px] min-h-[150px] min-w-[100px]  "
                  src={cities[2]}
                  alt="Laor"
                />
                <figcaption className="relative bottom-1/4 text-4xl font-slim text-white px-1">
                  Islamabad
                </figcaption>
              </figure>
              <figure className="relative block h-full bg-no-repeat bg-center bg-cover">
                <img
                  className="object-cover h-[272px] w-[216px] min-h-[150px] min-w-[100px]  "
                  src={cities[3]}
                  alt="Laor"
                />
                <figcaption className="relative bottom-1/4 text-4xl font-slim text-white px-1">
                  Faisalabad
                </figcaption>
              </figure>
              <figure className="relative block h-full bg-no-repeat bg-center bg-cover">
                <img
                  className="object-cover h-[272px] w-[216px] min-h-[150px] min-w-[100px]  "
                  src={cities[4]}
                  alt="Laor"
                />
                <figcaption className="relative bottom-1/4 text-4xl font-slim text-white px-1">
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
