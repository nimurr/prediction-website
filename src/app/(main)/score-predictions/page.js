

import React from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import { IoMdShareAlt } from "react-icons/io";


const Page = () => {
    return (
        <div className='contiainer mx-auto py-10 px-4 '>
            <div className='flex items-center text-sm mb-10 font-semibold gap-3 '>
                <h3 className=' '>Home</h3> <FaChevronRight /> <span className='text-[#4c1d95]'>Score Predictions</span>
            </div>

            <div>
                <div className='flex items-center gap-3 mb-5'>
                    <img src="/Images/Common/icons-title.png" alt="" />
                    <h3 className='text-xl font-semibold text-[#4c1d95]'>Predictions</h3>
                </div>
                <h2 className='md:text-5xl text-3xl font-semibold'>Featured Contests</h2>
            </div>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-white'>
                {
                    [...Array(9)].map((_, index) => (
                        <div className='bg-[url("/Images/Home/preduction-1.png")] w-full bg-cover bg-no-repeat bg-center p-5 rounded-2xl border border-[#4c1d95]'>
                            <div className='flex items-center justify-between gap-5'>
                                <img src="/Images/Home/ball.png" alt="" />
                                <div className='flex items-center gap-3'>
                                    <img src="/Images/Home/loading.png" alt="" />
                                    <p className='text-sm font-semibold text-[#4c1d95]'>July 20, 2025</p>
                                </div>
                            </div>
                            <div className='my-5'>
                                <h2 className='text-3xl font-semibold capitalize'>Soccer: Real Madrid vs Barcelona</h2>
                                <p className='font-medium mt-3'>Predict final score. Win <span className='text-[#4c1d95]'>$50</span> in crypto.</p>
                            </div>
                            <button className='bg-gradient-to-tl from-[#4c1d95] to-[#a878f1] cursor-pointer transition-colors text-white py-3 px-8 rounded-full flex items-center gap-2'>Submit Prediction  <IoMdShareAlt className='text-2xl' /></button>
                        </div>
                    ))
                }
            </div>


        </div>
    );
}

export default Page;
