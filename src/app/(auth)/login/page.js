'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle password visibility
    const togglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className='h-screen grid lg:grid-cols-2 bg-gradient-to-b from-[#f9f5ff] to-[#b6a7ca]'>

            {/* Left Column - Banner */}
            <div className='lg:block hidden'>
                <img className='h-screen w-full object-cover' src="/Images/Auth/auth-banner.png" alt="Auth Banner" />
            </div>

            {/* Right Column - Sign Up Form */}
            <div className='lg:w-1/2 lg:ml-10 w-full flex items-center h-screen'>
                <div className='w-96 mx-auto'>
                    <h2 className='text-3xl font-medium mb-1'>Login</h2>
                    <p>Please enter your email and password to continue</p>
                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="email">Email</label>
                        <input
                            placeholder='Enter your email'
                            className='mt-2 w-full p-2 border border-[#4c1d95] rounded-md focus:outline-0 ring-0 bg-white'
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="password">Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Enter your password'
                                className='mt-2 w-full p-2 border border-[#4c1d95] rounded-md focus:outline-0 ring-0 bg-white'
                                type={showPassword ? "text" : "password"} // Toggle password visibility
                                name="password"
                                id="password"
                            />
                            {/* Show/Hide Password Icon */}
                            <button
                                type="button"
                                onClick={togglePassword}
                                className='absolute cursor-pointer right-3 top-[30px] transform -translate-y-1/2 text-gray-500'
                            >
                                {!showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center my-5'>
                        <label className='' htmlFor="remember">
                            <input className='' type="checkbox" name="remember" id="remember" />
                            <span className='ml-2 text-gray-600'>Remember me</span>
                        </label>
                        <Link className='text-blue-600 text-sm' href="/forgot-password">Forgot Password</Link>
                    </div>
                    <div className='mt-5'>
                        <button className='cursor-pointer w-full p-2 bg-[#4c1d95] font-semibold text-white rounded-md'>Login</button>
                    </div>
                    <p className='text-center mt-5 text-gray-600'>Don't have an account? <Link className='text-blue-600' href="/signup" >Sign Up</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Page;
