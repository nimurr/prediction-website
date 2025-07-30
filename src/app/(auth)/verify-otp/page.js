'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import OTPInput from 'react-otp-input';

const OTPVerificationPage = () => {
    const [otp, setOtp] = useState('');
    console.log('OTP:', otp); // You can remove this in production

    return (
        <div className='h-screen grid lg:grid-cols-2 bg-gradient-to-b from-[#f9f5ff] to-[#b6a7ca]'>

            {/* Left - Banner Image */}
            <div className='lg:block hidden'>
                <img className='h-screen w-full object-cover' src="/Images/Auth/auth-banner.png" alt="Auth Banner" />
            </div>

            {/* Right - OTP Form */}
            <div className='lg:w-1/2 lg:ml-10 w-full flex items-center h-screen'>
                <div className='w-96 mx-auto'>

                    {/* Heading */}
                    <h2 className='text-3xl font-medium'>Verify OTP</h2>
                    <p className=' mt-4 text-gray-600'>
                        Please enter the 6-digit OTP sent to your email.
                    </p>

                    {/* OTP Input */}
                    <div className='mt-6'>
                        <label className='font-semibold block mb-2'>Enter OTP</label>
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            containerStyle={{ justifyContent: 'space-between' }}
                            renderInput={(props) => (
                                <input
                                    {...props} // Spread props from OTPInput (like value, onChange, etc.)
                                    className="!border bg-gray-200 border-[#4c1d95] rounded-md px-2 py-1" // Custom styles for the input
                                    style={{ width: '50px', height: '50px', textAlign: 'center' }} // Optional: adjust input size if needed
                                />
                            )}
                        />
                    </div>

                    {/* Verify Button */}
                    <div className='mt-6'>
                        <Link href="/update-password">
                            <button className='w-full p-2 bg-[#4c1d95] text-white font-semibold rounded-md'>
                                Verify
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OTPVerificationPage;
