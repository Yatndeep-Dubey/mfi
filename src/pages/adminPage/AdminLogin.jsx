import React from 'react'
import { Link } from 'react-router-dom'

function AdminLogin() {
    return (
        <div>
            <div className='flex min-h-screen h-screen overflow-hidden'>
                <div className='w-1/2 h-screen bg-[#ECBC76]'>
                    <img src='images/mfilogo.svg' alt='logo' className='w-[60px] lg:w-[120px] mt-2 object-contain  mx-5'></img>
                    <div className='rounded-lg w-[50%] hidden lg:block bg-white mx-5 mt-10 p-2 space-y-2'>
                        <div className='flex flex-row'>
                            <h1 className='font-semibold text-sm text-[#25282B] font-mont'>MFI Movers: Expanding Financial Inclusion and Empowering Communities</h1>
                            <p className='mx-2 font-semibold text-gray-600'>X</p>
                        </div>
                        <div className='flex flex-row space-x-1 items-center font-mont'>
                            <p className='text-[0.65rem]'>
                                Dec 30 2021 &nbsp;EuroNews &nbsp;4 min read
                            </p>
                            <div>
                                <div className='flex flex-row items-center'>
                                    <p className='text-[0.5rem] text-[#ECBC76] font-mont'>Add Notification</p>
                                    <img src='images/bell.svg' alt='bell' className='h-3 w-3'></img>
                                </div>

                            </div>
                            <div className='bg-[#ECBC76] rounded-lg p-1'>
                                <p className='text-[0.7rem]'>Unsubscribe</p>
                            </div>
                        </div>
                        <div>
                            <img src='images/cartoonboxes.svg' alt='cartoons' className='w-[99%] '></img>
                        </div>

                    </div>
                </div>
               
             <div className='rounded-lg p-2.5 px-5  lg:p-10 top-1/2 left-1/2  absolute shadow-2xl bg-white transform -translate-x-1/2 -translate-y-[55%] lg:-translate-y-1/2 w-[95vw] md:w-[40%]'>
                <div className='flex flex-row justify-between'>
                    <h1 className=' text-base lg:text-xl'>Welcome to <span className='text-sm lg:text-base text-[#ECBC76]'>MFI</span></h1>
                    <p className='text-sm lg:text-lg'>No Account?<br></br><span className='text-[#ECBC76]'><Link to='/signup_personal_details'>Sign Up</Link></span></p>
                </div>
                <div>
                    <h1 className='text-xl lg:text-4xl -mt-2 font-semibold'>Sign In</h1>
                </div>
                <div className='mt-5 space-y-1 lg:space-y-3'>
                    <div className=' space-y-1.5 lg:space-y-1'>
                        <h1 className=' text-[13px] lg:text-base font-bold'>Enter Your Username or Email Address</h1>
                          <input type='text'className='w-[100%] border-2 border-[#ADADAD] outline-none rounded-lg p-2' placeholder='Username or email address'></input>
                    </div>
                    <div className='space-y-1.5 lg:space-y-1'>
                        <div className='flex flex-row justify-between'>
                        <h1 className='text-[13px] lg:text-base font-bold'>Password</h1>
                        <p className='text-[#AD3113] text-[13px] lg:text-base'>Forgot Password</p>
                        </div>
                          <div className='border-2 border-[#ADADAD] rounded-lg p-1 flex flex-row  items-center'>
                          <input type='text'className='w-[90%]  outline-none  p-1' placeholder='Password'></input>
                          <img src='images/eye.svg' alt='eye'></img>
                          </div>

                    </div>
                    <div className=' space-y-1.5 lg:space-y-1'>
                        <h1 className='font-bold text-[13px] lg:text-base'>Enter Your Membership Number</h1>
                          <input type='text'className='w-[100%] border-2 border-[#ADADAD] outline-none rounded-lg p-2' placeholder='Membership Number'></input>
                    </div>
                    <div>
                        <button className='bg-[#402C6B] rounded-lg text-white text-[13px] lg:text-base text-center p-2 w-full'>Sign In</button>
                    </div>
                    <p className='text-gray-400 text-center'>OR</p>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row space-x-2 items-center w-fit bg-[#402C6B33] py-2 px-2 lg:px-12 rounded-lg'>
                            <img src='images/google.svg' alt='google'></img>
                            <p className='text-[13px] lg:text-base'>Sign in with Google</p>
                        </div>
                        <div className='bg-[#F6F6F6] p-2 rounded-lg '>
                             <img src='images/facebook.svg' className='w-[26px] lg:w-[40px] ' alt='fb'></img>
                        </div>
                        <div className='bg-[#F6F6F6] p-2 rounded-lg'>
                            <img src='images/linkedin.svg' className='w-[26px] lg:w-[40px] '  alt='fb'></img>
                        </div>
                    </div>
                </div>
             </div>

               <div className='lg:w-1/2   flex justify-center lg:justify-end'>
                 <img src='images/flyingman.svg' alt='flying man' className=' absolute bottom-0 w-[110px] sm:w-[130px] lg:w-96'></img>
               </div>

            </div>
        </div>
    )
}

export default AdminLogin