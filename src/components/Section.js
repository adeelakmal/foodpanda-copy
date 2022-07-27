import React from "react";

function Section() {
  const style = `.img{background-image: url("https://images.deliveryhero.io/image/foodpanda/hero-home-pk.jpg?width=1400&height=896");
  background-repeat: no-repeat;
  display: block;
  background-size: cover;
  height: 100%;
  width: 33%;
  position: absolute;
  margin: 0;
  margin-left: 67%;
  max-height: 615px;
    }
    .hero-sec{
        width: 100%;
        padding-bottom: 104px;
        padding-left: 80px; 
        padding-right: 80px; 
        max-width: 1300px;
    }
    .hero-text{
        max-width: 64%;
    }
    .hero-text h1{
      line-height: 3.5rem;
  }`;
  return (
    <>
      <style>{style}</style>
      <div className="mb-6">
        <div className="img"></div>
        <div className="hero-sec relative pt-20">
          <div className="hero-text pt-20 pb-12">
            <h1 className="text-4xl font-Open font-light">
              It's the food and groceries you love, delivered
            </h1>
          </div>

          <div className="w-3/4 grid grid-cols-5 gap-4 p-3 bg-white rounded-lg drop-shadow-lg">
            <input
              className="col-span-3 p-4 border border-gray border-solid rounded-lg "
              type="text"
              placeholder="Search for anything..."
            />

            <div className="col-span-2 flex justify-around items-center">
              <button className="bg-pink text-white mx-2 p-5 px-8 rounded-lg">
                Delivery
              </button>
              <span>or</span>
              <button className="bg-pink text-white mx-2 p-5 px-8 rounded-lg">
                Pick-Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
