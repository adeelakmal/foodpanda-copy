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
      <div className="m-[60px] left-[10px] bottom-[460px]">
        <h2 className="absolute top-0 font-Open font-bold text-gray-300/25 px-12 fontCities">
          Cities
        </h2>
        <span className="relative text-lg font-light leading-big ManyMore"> {/*many more has relative*/}
          Find us in these cities and many more!
        </span>
        {/* get the city names and pictures that have already been stored in a database use mongo probably */}
        <ul className="relative block top-2">
          <li>
            <div className="w-64">
              <div className="grid grid-rows-1 grid-flow-col gap-7 citiesMargin">
              <figure className="relative block h-full bg-no-repeat bg-center bg-cover">
                <img className="object-cover h-64 w-48 min-h-[300px] min-w-[230px] citiesHover" src={cities[0]} alt="Laor"/>
                <figcaption className="relative bottom-1/4 text-4xl font-slim text-white px-1">
                  Lahore
                </figcaption>
              </figure>
              <figure className="relative block h-full bg-no-repeat bg-center bg-cover">
                <img className="object-cover h-64 w-48 min-h-[300px] min-w-[230px] citiesHover" src={cities[1]} alt="Laor" />
                <figcaption className="relative bottom-1/4 text-4xl font-slim text-white px-1">
                  karachi
                </figcaption>
              </figure>
              <figure className="relative block h-full bg-no-repeat bg-center bg-cover">
                <img className="object-cover h-64 w-48 min-h-[300px] min-w-[230px] citiesHover" src={cities[2]} alt="Laor" />
                <figcaption className="relative bottom-1/4 text-4xl font-slim text-white px-1">
                  Islamabad
                </figcaption>
              </figure>
              <figure className="relative block h-full bg-no-repeat bg-center bg-cover">
                <img className="object-cover h-64 w-48 min-h-[300px] min-w-[230px] citiesHover" src={cities[3]} alt="Laor" />
                <figcaption className="relative bottom-1/4 text-4xl font-slim text-white px-1">
                  Faisalabad
                </figcaption>
              </figure>
              <figure className="relative block h-full bg-no-repeat bg-center bg-cover">
                <img className="object-cover h-64 w-48 min-h-[300px] min-w-[230px] citiesHover" src={cities[4]} alt="Laor" />
                <figcaption className="relative bottom-1/4 text-4xl font-slim text-white px-1">
                  Rawalpindi
                </figcaption>
              </figure>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Cities;
