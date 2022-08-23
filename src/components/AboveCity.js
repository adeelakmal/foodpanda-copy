import React from "react";

export default function AboveCity() {
  const chef = require("./img/home-vendor-pk.webp");
  return (
    <>
    <div className="relative mt-24">
        <div className="relative ml-12 bottom-1" style={{zIndex: "-1"}}>
          <div className="absolute text-lg font-light  pl-20 top-0" style = {{fontSize: "27px"}}> You prepare the food, we handle the rest</div>
          <div className="relative top-0 font-Open font-bold leading-small text-blackG/20 px-12 pl-20" style={{fontSize: "10rem"}}>Partners</div>
        </div>
      <div style={{zIndex: "1"}}>
      <img
            className="object-cover w-full h-[404px] z-20" 
            src={chef}
            alt="Laor"
        />
      </div>
      <div className="absolute ml-44 border-0 max-w-[550px] bg-white bottom-12 text-black font-light">
        <div className="m-6">
          <p className="my-6 mx-1" style={{fontSize: "1.5rem"}}>List your restaurant or shop on foodpanda</p>
          <p className="p-1">Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</p>
          <p className="p-1">It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p>
          <p className="p-1">Interested? Let's start our partnership today!</p>
          <div className="relative p-3" style={{zIndex:"9"}}>
            <button className="p-2 buttonGetstarted">Get Started</button>
          </div>
          <div className="text-white">lerum</div>
        </div>
      </div>
    </div>
    </>
    
  );
}
