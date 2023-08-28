import React from 'react'

const Home = () => {
  return (
    <div className='w-full relative min-h-screen'>
<div className='w-full bg-[#2E2E2E] px-2 sm:px-10 pr-[8%] text-white flex gap-6 items-center justify-between'>
    <div className='flex  flex-col sm:flex-row items-center gap-2 sm:gap-6'>
    <div className='flex sm:items-center text-[11px] sm:text-[16px] gap-2 pr-5 border-r border-r-gray-400'><img className=' w-[10px] sm:w-[20px] object-contain' src="/assets/phone.png" alt="phone" /><p>+91 911-365-1818 / +91 953-853-1818</p></div>
    <div className='flex items-center text-[11px] sm:text-[16px] gap-2'><img className='w-[14px] sm:w-[20px] object-contain' src="/assets/mail.png" alt="phone" /><p>info@pickntrack.com</p></div>
    </div>
    <div className=' text-[#2e2e2e] text-[11px] sm:text-[16px]  bg-[#ffe1a3] py-2 px-3 flex items-center gap-2'><img className='w-[20px] object-contain' src="/assets/location.png" alt="phone" /><p>Delhi, India</p></div>
</div>
<div className='bg-[#FFE1A3] relative w-full py-3 px-4 sm:px-10 flex items-center justify-between'>
    <img className=' w-[55px] sm:w-[75px] object-contain' src="/assets/lofgoHome.png" alt="logo"/>
    <div className='flex items-center gap-4 sm:gap-10'>
        <a href="#" className='font-bold text-[13px] sm:text-[16.5px]'>Home</a>
        <a href="#" className='font-bold text-[13px] sm:text-[16.5px]'>About Us</a>
        <a href="#" className='font-bold text-[13px] sm:text-[16.5px]'>Contact Us</a>
    </div>
</div>
<img className='w-full h-full object-cover ' src="/assets/hero.png" alt="hero"/>
<div className='flex  items-baseline px-2 sm:px-10 my-4 gap-4'><p className=' text-[20px] sm:text-[32px] font-bold'>Use Coupon Code -</p><p className='text-[#808080] text-[15px] sm:text-[20px]'>RAKHIMOVE</p></div>
<p className='text-[#ECBC76] text-[15px] sm:text-[17px] px-2 sm:px-10 '>As the festival of Raksha Bandhan approaches, we want to take a moment to express our heartfelt gratitude for choosing Pick N Track for your moving and packing needs. Just like the bond between siblings, we understand the importance of trust and reliability when it comes to handling your precious belongings.</p>
<form className='flex flex-col gap-y-4 px-2 sm:px-10 my-4 text-[14px] sm:text-[16px] '>
<label htmlFor='name' className='text-black font-bold -mb-3'>Full Name<span className='text-red-400'>*</span></label>
<input type='text' className='border border-[#ccc] py-1.5 rounded-[6px]' />
<label htmlFor='name' className='text-black font-bold -mb-3'>Phone Number<span className='text-red-400'>*</span></label>
<input type='text' className='border border-[#ccc] py-1.5 rounded-[6px]' />
<label htmlFor='name' className='text-black font-bold -mb-3'>Pickup Location<span className='text-red-400'>*</span></label>
<input type='text' className='border border-[#ccc] py-1.5 rounded-[6px]' />
<label htmlFor='name' className='text-black font-bold -mb-3'>Drop Location<span className='text-red-400'>*</span></label>
<input type='text' className='border border-[#ccc] py-1.5 rounded-[6px]' />
<label htmlFor='name' className='text-black font-bold -mb-3'>Apply Coupon Code<span className='text-red-400'>*</span></label>
<input type='text' className='border border-[#ccc] py-1.5 rounded-[6px]' />
<button type='submit' className='py-2.5 px-16 w-fit rounded-[5px] bg-[#FFAB2B] font-bold text-[13px] sm:text-[16px]'>Submit</button>
</form>
{/* footer ------------------------------------------------------------------------------------------------------------------- */}
<footer className='w-full  flex flex-col items-center justify-between  bg-[#2E2E2E] overflow-x-hidden '>
    <div className='flex flex-col lg:flex-row lg:items-center justify-between w-full text-white px-2 sm:px-4 lg:px-10 '>
        <div className='flex flex-col py-3 sm:py-10 gap-3 justify-start h-full text-[13px] sm:text-[15px] lg:border-r border-r-gray-400 flex-grow xs:w-full lg:w-max lg:items-center '>
            <p className='font-bold text-[15px] sm:text-[17px] mb-1'>Sitemap</p>
            <a className=''>Home</a>
            <a className=''>About</a>
            <a className='lg:text-center'>Contact Us</a>
            </div>
        <div className='flex flex-col py-3 sm:py-6 gap-3 text-[13px] sm:text-[15px] lg:border-r border-r-gray-400 flex-grow w-max lg:items-center '>
            <p className='font-bold text-[15px] sm:text-[17px] mb-1'>Support</p>
            <a className=''>Disclaimer</a>
            <a className=''>FAQ’s</a>
            <a className=''>Privacy Policy</a>
            <a className='text-center'>Terms & Conditions</a>
            </div>
        <div className='flex flex-col py-3 sm:py-10 gap-3 text-[13px] sm:text-[15px] lg:border-r border-r-gray-400 flex-grow w-max  lg:items-center '>
            <p className='font-bold text-[15px] sm:text-[17px] mb-1 '>Customer Care</p>
            <a className=''>Timings: 10AM-6PM (Mon-Sat)</a>
            <a className=''>Call: +91 953853181</a>
            <a className='text-center'>Email: info@pickntrack.com/
pickntrack@gmail.com</a>
            </div>
        <div className='flex flex-col py-3 sm:py-0 gap-3 text-[13px] sm:text-[15px] flex-grow w-max  lg:items-center'>
            <p className='font-bold text-[15px] sm:text-[17px] mb-1'>Subscribe</p>
            <a className=''>Want to receive amazing updates from Pick’N Track?</a>
            <form className='flex items-center bg-white  px-4 w-fit rounded-full'>
   <img className='w-[21px] object-contain' src="/assets/mail.png"/>
                <input type="email" className='py-1 px-4' placeholder='Enter Your Emai' />
                <button>
   <img className='w-[21px] object-contain' src="/assets/arrow.png"/>
                </button>
                </form>
           <div className='lg:border-t w-full sm:p-4  border-t-gray-400'>
            <p className='font-bold w-[50%] sm:w-full '>Pick N Track App coming Soon On Google Play & Apple Store</p>
           <div className='flex items-center gap-2 mt-3'>
           <a href='#'><img className='w-[27px] object-contain' src="/assets/ps.png"/></a>
    <a href='#'><img className='w-[27px] object-contain' src="/assets/ap.png"/></a>
           </div>
           </div>
            </div>
    </div>
    <div className='w-full flex flex-col sm:flex-row items-center gap-y-2 px-10 py-3 border-t border-t-gray-400 justify-between '>

<div className='flex items-center gap-5'>
    <a href='#'><img className=' w-[15px] lg:w-[21px] object-contain' src="/assets/f1.png"/></a>
    <a href='#'><img className=' w-[15px] lg:w-[21px] object-contain' src="/assets/f2.png"/></a>
    <a href='#'><img className=' w-[15px] lg:w-[21px] object-contain' src="/assets/f3.png"/></a>
    <a href='#'><img className=' w-[15px] lg:w-[21px] object-contain' src="/assets/f4.png"/></a>
    <a href='#'><img className=' w-[15px] lg:w-[21px] object-contain' src="/assets/f5.png"/></a>
    </div>
    <p className=' text-[10px] lg:text-[13px] text-white'>Copyright © 2020 All rights reserved.</p>
    <a href='#'><img className='w-[107px] object-contain' src="/assets/f6.png"/></a>
    </div>
</footer>
    </div>
  )
}

export default Home