'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const toggleConfirmPassword = () => {
        setShowConfirmPassword(prev => !prev);
    };

    return (
        <div className='h-screen grid lg:grid-cols-2 bg-gradient-to-b from-[#f9f5ff] to-[#b6a7ca]'>

            {/* Left Column - Banner */}
            <div className='lg:block hidden'>
                <img className='h-screen w-full object-cover' src="/Images/Auth/auth-banner.png" alt="Auth Banner" />
            </div>

            {/* Right Column - Sign Up Form */}
            <div className='lg:w-1/2 lg:ml-10 w-full flex items-center h-screen'>
                <div className='w-96  mx-auto'>
                    <h2 className='text-3xl font-medium mb-1'>Sign Up</h2>
                    <p>Please fill in your details to create an account</p>

                    {/* Full Name */}
                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="name">Full Name</label>
                        <input
                            placeholder='Enter your name'
                            className='mt-2 w-full p-2 border border-[#4c1d95] rounded-md focus:outline-0 ring-0 bg-white'
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>

                    {/* Email */}
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

                    {/* Password */}
                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="password">Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Enter your password'
                                className='mt-2 w-full p-2 border border-[#4c1d95] rounded-md focus:outline-0 ring-0 bg-white'
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className='absolute cursor-pointer right-3 top-[30px] transform -translate-y-1/2 text-gray-500'
                            >
                                {!showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="confirmPassword">Confirm Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Re-enter your password'
                                className='mt-2 w-full p-2 border border-[#4c1d95] rounded-md focus:outline-0 ring-0 bg-white'
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPassword}
                                className='absolute cursor-pointer right-3 top-[30px] transform -translate-y-1/2 text-gray-500'
                            >
                                {!showConfirmPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>


                    {/* Terms & Conditions */}
                    <div className='flex justify-between items-center my-5'>
                        <label htmlFor="terms" className='flex items-center text-gray-600'>
                            <input
                                className='mr-2'
                                type="checkbox"
                                name="terms"
                                id="terms"
                            />
                            I agree to all terms & conditions
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className='mt-5'>
                        <button className='cursor-pointer w-full p-2 bg-[#4c1d95] font-semibold text-white rounded-md'>Sign Up</button>
                    </div>

                    {/* Footer Link */}
                    <p className='text-center mt-5 text-gray-600'>
                        Already have an account? <Link className='text-blue-600' href="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
