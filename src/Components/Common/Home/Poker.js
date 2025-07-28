import React from 'react';
import { IoMdShareAlt } from "react-icons/io";


const Poker = () => {
    return (
        <div className='contiainer mx-auto py-10 px-4 '>

            <div>
                <div className='flex items-center gap-3 mb-5'>
                    <img src="/Images/Common/icons-title.png" alt="" />
                    <h3 className='text-xl font-semibold text-[#4c1d95]'>Predictions</h3>
                </div>
                <h2 className='md:text-5xl text-3xl font-semibold'>Featured Contests</h2>
            </div>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-white'>
                {
                    [...Array(3)].map((_, index) => (
                        <div className='bg-[url("/Images/Home/preduction-1.png")] w-full bg-cover bg-no-repeat bg-center p-5 rounded-2xl border border-[#4c1d95]'>
                            <div className='flex items-center justify-between gap-5'>
                                <img src="/Images/Home/ball.png" alt="" />
                                <div className='flex items-center gap-3'>
                                    <p className='text-sm font-semibold bg-[#4d1d9536] py-1 px-3 rounded-full text-[#4c1d95]'>1Win</p>
                                </div>
                            </div>
                            <div className='my-5'>
                                <h2 className='text-3xl font-semibold capitalize'>Friday Night Showdown</h2>
                                <p className='font-semibold my-2'>Buy In : <span className='font-medium text-gray-500'>$50</span></p>
                                <p className='font-semibold my-2'>Time : <span className='font-medium text-gray-500'> Friday, 9 PM UTC</span></p>
                                <p className='font-semibold my-2'>Rewards : <span className='font-medium text-gray-500'>$5,000 Prize Pool</span></p>
                            </div>
                            <button className='bg-gradient-to-tl from-[#4c1d95] to-[#a878f1] cursor-pointer transition-colors text-white py-3 px-8 rounded-full flex items-center gap-2'>Submit Prediction  <IoMdShareAlt className='text-2xl' /></button>
                        </div>
                    ))
                }
            </div>

            <div className='flex items-center justify-center'>
                <button className='bg-[#4c1d95] cursor-pointer hover:bg-[#3b117c] transition-colors text-white py-3 px-8 rounded-full'>View All</button>
            </div>
        </div>
    );
}

export default Poker;
