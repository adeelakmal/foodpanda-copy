import React from "react";

function Cities() {
  const img = require(`./img/Lahore.jpg`);
  return (
    <>
      <div className="relative">
        <h2 className=" relative font-Open font-bold text-xxl text-gray-400/25 px-12">
          Cities
        </h2>
        <span className="absolute top-0 left-12 text-lg font-light leading-big">
          Find us in these cities and many more!
        </span>
        {/* get the city names and pictures that have already been stored in a database use mongo probably */}
        <ul className="relative block">
          <li>
            <div className="w-64">
              <figure>
                <img className="object-cover h-64 w-48" src={img} alt="Laor" />
                <figcaption className="absolute top-0 text-lg font-light">
                  Lahore
                </figcaption>
              </figure>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Cities;
