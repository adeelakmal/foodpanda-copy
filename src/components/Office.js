import React from 'react'
import useWindowDimensions from './Dimentions';
export default function Office() {
    const office = require("./img/office.webp");
    const { height, width } = useWindowDimensions();

    return (
    <>
    <div className='relative top-[100px]'>
        <div className="relative">
            <h2 className="relative bottom-6 font-Open font-bold leading-small text-blackG/10 px-12 pl-20" style={{fontSize: "10rem"}}>
            Office
            </h2>
            <span className="absolute text-lg font-light  pl-20 top-0" style = {{fontSize: "27px"}}>
            take your office out to lunch            </span>
        </div>
    <div className='relative'>
        <img
            className="object-cover h-[404px] z-20" style = {{width: width}}
            src={office}
            alt="Laor"
        />
              <div className="absolute ml-44 border-0 max-w-[550px] bg-white bottom-12 text-black font-light">
        <div className="m-6">
          <p className="my-6 mx-1" style={{fontSize: "1.5rem"}}>Foodpanda for business</p>
          <p className="p-1">Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.</p>
          <div className="relative p-3" style={{zIndex:"9"}}>
            <button className="p-2 buttonGetstarted">Get Started</button>
          </div>
          <div className="text-white">lerum</div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
