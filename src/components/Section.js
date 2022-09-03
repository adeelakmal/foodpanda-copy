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

export default Section;
