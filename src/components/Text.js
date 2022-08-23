import React from 'react'
import useWindowDimensions from './Dimentions';
export default function Text() {
const { height, width } = useWindowDimensions();
  return (
    <>
    <div className='relative font-Open m-24' style = {{maxWidth: "1280px"}}>
        <h1 className='font-bold' style={{fontSize:'2rem'}}>Order food and groceries online from the best restaurants and shops on foodpanda</h1>
        <p>
        Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodpanda Pakistan is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your everyday easier. Our online food delivery service has it all, whether you fancy Indian, Pakistani or Afghan cuisine, foodpanda Pakistan has over 15,000 restaurants available in top cities like Islamabad, Lahore, Rawalpindi, and Karachi. Did you know you can order your groceries and more from foodpanda, too? Check out foodpanda shops for favourite partners like Al-Fatah, Greenvalley and more. Sit back and relax – let foodpanda Pakistan take the pressure off your shoulders.
        </p>
        <h1 className='font-bold' style={{fontSize:'2rem'}}>
        What's new?
        </h1>
        <li> ✓ Selection of premium restaurants, all kind of cuisines.</li>
        <li> ✓ High quality delivery service.</li>
        <li> ✓ Live chat feature to give App users instant help when they need it.</li>
        <li> ✓ NEW: foodpanda grocery delivery! Discover the best shops, pharmacies, bakeries and more near you.</li>
        <h1 className='font-bold' style={{fontSize:'2rem'}}>
        Frequently Asked Questions
        </h1>
        <h1 className='font-bold' style={{fontSize:'2rem'}}>
        How can I get foodpanda delivery?
        </h1>
        <p>
        To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your address, browse through a variety of restaurants and cuisines, check menus and prices, choose your dishes and add them to the basket. Now you only need to checkout and make the payment. Soon your delicious food will arrive at your doorstep!
        </p>
        <h1 className='font-bold' style={{fontSize:'2rem'}}>
        How can I order food in Pakistan?
        </h1>
        <h1>
        To order food delivery in Pakistan, follow these simple steps:
        </h1>
        <p>
        Find a restaurant. Enter your delivery address in the location form to see all the places that deliver to your location. It can be your home, office, a hotel or even parks!
        Choose your dishes. Browse the menu of the chosen restaurant, select your dishes and add them to your basket. When you are done, press the "Checkout" button.
        Checkout & Payment. Check your order, payment method selection and exact delivery address. Simply follow the checkout instructions from there.
        Delivery. We will send you an email and SMS confirming your order and delivery time. Sit back, relax and wait for piping hot food to be conveniently delivered to you!.
        </p>
        <h1 className='font-bold' style={{fontSize:'2rem'}}>
        Does foodpanda deliver 24 hours?
        </h1>
        <p>
        Yes, foodpanda in Pakistan delivers 24 hours. However, many restaurants may be unavailable for a late night delivery. Please check which places in Pakistan deliver to you 24 hours by using your address. You can also order groceries 24 hours a day via pandamart.
        </p>
        <h1 className='font-bold' style={{fontSize:'2rem'}}>
        Can you pay cash for foodpanda?
        </h1>
        <p>
        Yes, you can pay cash on delivery for foodpanda in Pakistan.
        </p>
        <h1 className='font-bold' style={{fontSize:'2rem'}}>    
        How can I pay foodpanda online?
        </h1>
        <p>
        You can pay online while ordering at foodpanda Pakistan by using a credit or debit card or PayPal.
        </p>
        <h1 className='font-bold' style={{fontSize:'2rem'}}>
        Can I order foodpanda for someone else?
        </h1>
        <p>
        Yes, foodpanda Pakistan allows you to place an order for someone else. During checkout, just update the name and delivery address of the person you're ordering for. Please keep in mind that if the delivery details are not correct and the order cannot be delivered, we won't be able to process a refund.
        </p>
        <h1 className='font-bold' style={{fontSize:'2rem'}}>
        How much does foodpanda charge for delivery?
        </h1>
        <p>
        Delivery fee charged by foodpanda in Pakistan depends on many operational factors, most of all - location and a restaurant you are ordering from. You can always check the delivery fee while forming your order. Besides, you can filter the restaurants by clicking on "Free Delivery" icon on the top of your restaurants listing.
        </p>
        <h1 className='font-bold' style={{fontSize:'2rem'}}>
        What restaurants let you order online?
        </h1>
        <p>
        There are hundreds of restaurants on foodpanda Pakistan that let you order online. For example, KFC, McDonald's, Pizza Hut, OPTP, Hardee's, Domino's, Kababjees and many-many more! In order to check all the restaurants near you that deliver, just type in your address and discover all the available places.
        </p>
        <h1 className='font-bold' style={{fontSize:'2rem'}}>
        Does foodpanda have minimum order?
        </h1>
        <p>
        Yes, many restaurants have a minimum order. The minimum order value depends on the restaurant you order from and is indicated during your ordering process.
        </p>
        <h1 className='font-bold' style={{fontSize:'2rem'}}>
        What is the difference between delivery and Pick-Up?
        </h1>
        <p>
        If you choose delivery, a foodpanda rider will collect your order from the restaurant and take it to your chosen delivery address. If you choose Pick-Up, you can takeaway your food directly from the restaurant for extra savings – and to jump to the front of the queue. Pick-Up orders are available for restaurants only.
        </p>
    </div>
    </>
  )
}
