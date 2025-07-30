'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePassword = () => setShowPassword(prev => !prev);
    const toggleConfirmPassword = () => setShowConfirmPassword(prev => !prev);

    return (
        <div className='h-screen grid lg:grid-cols-2 bg-gradient-to-b from-[#f9f5ff] to-[#b6a7ca]'>

            {/* Left: Auth Banner */}
            <div className='lg:block hidden'>
                <img className='h-screen w-full object-cover' src="/Images/Auth/auth-banner.png" alt="Auth Banner" />
            </div>

            {/* Right: Update Password Form */}
            <div className='lg:w-1/2 lg:ml-10 w-full flex items-center h-screen'>
                <div className='w-96 mx-auto'>

                    {/* Title & Instruction */}
                    <h2 className='text-3xl font-medium mb-1'>Update Password</h2>
                    <p className='text-gray-600 mb-6'>
                        Please enter your new password and confirm it below
                    </p>

                    {/* New Password */}
                    <div className='mb-5'>
                        <label className='font-semibold' htmlFor="password">Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Enter your new password'
                                className='mt-2 w-full p-2 border border-[#4c1d95] rounded-md bg-white focus:outline-0'
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className='absolute right-3 top-[30px] transform -translate-y-1/2 text-gray-500'
                            >
                                {!showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className='mb-5'>
                        <label className='font-semibold' htmlFor="confirm-password">Confirm Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Re-enter your password'
                                className='mt-2 w-full p-2 border border-[#4c1d95] rounded-md bg-white focus:outline-0'
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirm-password"
                                id="confirm-password"
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPassword}
                                className='absolute right-3 top-[30px] transform -translate-y-1/2 text-gray-500'
                            >
                                {!showConfirmPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    {/* Update Button */}
                    <div className='mt-5'>
                        <Link href="/login">
                            <button className='w-full p-2 bg-[#4c1d95] text-white font-semibold rounded-md'>
                                Update Password
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
