'use client';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className='h-screen grid lg:grid-cols-2 bg-gradient-to-b from-[#f9f5ff] to-[#b6a7ca]'>

            {/* Left Column - Banner */}
            <div className='lg:block hidden'>
                <img
                    className='h-screen w-full object-cover'
                    src="/Images/Auth/auth-banner.png"
                    alt="Auth Banner"
                />
            </div>

            {/* Right Column - Form */}
            <div className='lg:w-1/2 lg:ml-10 w-full flex items-center h-screen'>
                <div className='w-96 mx-auto'> 

                    {/* Title */}
                    <h2 className='text-3xl font-medium'>Forgot Password?</h2>
                    <p className=' mt-5 text-gray-600'>
                        Please enter your email address <br /> to reset your password.
                    </p>

                    {/* Email Input */}
                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="email">Email</label>
                        <input
                            placeholder='Enter your email'
                            className='mt-2 w-full p-2 border border-[#4c1d95] rounded-md focus:outline-0 bg-white'
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className='mt-6'>
                        <Link href="/verify-otp">
                            <button className='w-full p-2 bg-[#4c1d95] text-white font-semibold rounded-md'>
                                Send OTP
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Page;
