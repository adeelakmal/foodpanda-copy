import React from "react";
import useWindowDimensions from './Dimentions';
import Test from "./Test";
function Section() {
  const { width } = useWindowDimensions();
  if (width>800)
  {
  return (
    <>
      <div className="mb-6">
        <div className="img"></div>
          <div className="hero-sec relative pt-20">
            <div className="hero-text pt-20 pb-12">
              <h1 className="text-4xl font-Open font-light">
                It's the food and groceries you love, delivered {width}
              </h1>
          </div>

          <div className="md:w-3/4 w-[100%] flex gap-4 p-3 bg-white rounded-lg drop-shadow-lg">
            <input
              className="flex-auto w-[60%] col-span-3 p-4 border border-gray border-solid rounded-lg"
              type="text"
              placeholder="Search for anything..." 
            />
              <button className="flex-intial bg-pink text-white rounded-lg w-44">
                Delivery
              </button>
              <span className="flex-intial py-5">or</span>
              <button className="flex-intial bg-pink text-white rounded-lg w-44">
                Pick-Up
              </button>
          </div>
        </div>
      </div>
    </>
  );
}
else
{
  return (<>
  <div className="mb-6">
    <div className="img"></div>
      <div className="hero-sec relative pt-20">
        <div className="hero-text pt-20 pb-12">
          <h1 className="text-4xl font-Open font-light">
            It's the food and groceries you love, delivered
          </h1>
      </div>
      
      </div>
    </div>
    <Test/>
</>
);
}
}

export default Section;
