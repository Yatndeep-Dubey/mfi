import React from 'react'
import { Link } from 'react-router-dom'

function Admin_Signup_personal_details() {
  return (
<div className='h-screen overflow-y-hidden'>

  <div className="h-[55%]  px-5 p-2 lg:mx-10">
  <img src='images/mfilogo.svg' className='w-[80px] lg:w-[150px]'  alt='logo' ></img>
  <div className='mt-5 hidden lg:block'>
   <h1 className='text-[#987549] text-md font-semibold'>Fill In your personal Details</h1>
   <p className='text-sm'>This will help us to know you better </p>
  </div>
    <img src='images/twoman.svg' className=' absolute lg:relative bottom-0 mx-auto right-[40%] h-20 lg:h-80' alt='twoman'></img>
    <div className='hidden lg:block'>
       <p className='text-[#402C6B] text-3xl font-bold font-poppins'>Welcome to the</p>
       <p className='text-xl text-[#604622] font-poppins'>Powerhouse of the Movers</p>
       <p className='w-[45%] font-poppins mt-5'>Access the MFI Admin Panel to streamline your management tasks, enhance collaboration, and stay at the forefront of the movers industry</p>
    </div>
  </div>
  <div className='rounded-lg p-2 px-4  lg:p-5 top-1/2 absolute right-5 lg:right-10 shadow-2xl bg-white transform lg:-translate-x-1/2 -translate-y-1/2 w-[90vw] lg:w-[30%]'>
                <div className='flex flex-row justify-between font-mont'>
                    <h1 className='text-sm lg:text-lg'>Welcome to <span className='text-[#ECBC76]'>MFI</span></h1>
                    <p className='text-sm lg:text-lg'>Have an Account?<br></br><Link to="/"><span className='text-[#ECBC76]'>Sign In</span></Link></p>
                </div>
                <div>
                    <h1 className=' text-xl lg:text-2xl -mt-2 font-semibold font-mont'>Sign In</h1>
                </div>
                <div className='mt-5 space-y-1 lg:space-y-3'>
                    <div className='space-y-1'>
                        <h1 className='text-sm lg:text-base font-bold'>Name</h1>
                          <input type='text'className='w-[100%] border-2 border-[#ADADAD] outline-none rounded-lg p-2' placeholder='Username or email address'></input>
                    </div>
                    <div className='space-y-1'>
                        <div>
                        <h1 className='text-sm lg:text-base font-bold'>Email Address</h1>
                        </div>
                          <div className='border-2 border-[#ADADAD] rounded-lg p-1 flex flex-row  items-center'>
                          <input type='text'className='w-[100%]  outline-none  p-1' placeholder='Email Address'></input>
                          </div>

                    </div>
                    <div className='space-y-1'>
                        <h1 className='text-sm lg:text-base font-bold'>Contact Number</h1>
                          <input type='text'className='w-[100%] border-2 border-[#ADADAD] outline-none rounded-lg p-2' placeholder='Contact Number'></input>
                    </div>
                    <div className='space-y-1'>
                        <h1 className='text-sm lg:text-base font-bold'>Location</h1>
                          <input type='text'className='w-[100%] border-2 border-[#ADADAD] outline-none rounded-lg p-2' placeholder='Location'></input>
                    </div>
                    <div>
                      <Link to='/signup_company_details'>
                      <button className='bg-[#402C6B] rounded-lg text-sm lg:text-base text-white text-center p-2 w-full'>Next</button></Link>
                       
                    </div>
                    <img src='images/dots.svg' alt='dots' className='mx-auto'></img>
                </div>
             </div>


  <div className="h-[45%]  bg-[#ECBC76]">

  </div>
</div>
  )
}

export default Admin_Signup_personal_details