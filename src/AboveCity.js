import React from 'react'

export default function AboveCity() {
    const chef = require('C:/Users/muham/Documents/GitHub/foodpanda-copy/src/components/img/home-vendor-pk.webp')
  return (
    <>
    <div className='photoWithText'>
        <figure className='absolute top-5 z-0 chef'>
            <img className="h-96 w-full object-cover" src={chef} alt="Laor"/>
        </figure>
        <div className='z-50 CitiesMargin texty'>
            <div className='text-lg font-light leading-big ManyMore'>You prepare the food, we handle the rest</div>
            <div className='absolute top-0 font-Open font-bold text-gray-300/25 px-12 fontCities'>Partners</div>
        </div>
    </div>
    <div className='section container mx-auto'>
        <h1 className='heading'>
            List your fucking restaurant or shop on foodpanda
        </h1>
        <section className='para'>
            <p>
            Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
            </p>
            <p>
            It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas in a heartbeat!
            </p>
            <p>
            Interested? Let's start our partnership today!
            </p>
            <button className = "buttonGetstarted" type="button">Get Started</button>
        </section>
        
    </div>
    </>
    )
}

