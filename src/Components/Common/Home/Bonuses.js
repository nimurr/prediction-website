import Link from 'next/link';
import React from 'react';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { IoMdShareAlt } from "react-icons/io";
import { TbMessage2Star } from "react-icons/tb";


const Bonuses = () => {
    return (
        <div className='contiainer mx-auto py-10 px-4 '>

            <div>
                <div className='flex items-center gap-3 mb-5'>
                    <img src="/Images/Common/icons-title.png" alt="" />
                    <h3 className='text-xl font-semibold text-[#4c1d95]'>Bonuses</h3>
                </div>
                <h2 className='md:text-5xl text-3xl font-semibold'>Top Casino Bonuses</h2>
            </div>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-white'>
                {
                    [...Array(3)].map((_, index) => (
                        <div className='bg-[url("/Images/Home/preduction-2.png")] w-full bg-cover bg-no-repeat bg-center p-5 rounded-2xl border border-[#4c1d95]'>
                            <div className='flex items-center justify-center gap-5'>
                                <img src="/Images/Home/btc.png" alt="" />

                            </div>
                            <div className='my-5'>
                                <h2 className='text-2xl text-center font-semibold capitalize'>BTC</h2>
                                <p className='font-medium text-center mt-3'>Predict final score. Win <span className='text-[#4c1d95]'>$50</span> in crypto.</p>
                            </div>
                            <div className='flex items-center justify-center gap-5'>
                                <Link href={'/price-predictions'} className='bg-gradient-to-tl from-[#4c1d95] to-[#a878f1] cursor-pointer transition-colors text-white py-3 px-4 rounded-full flex items-center gap-2'>Join Now  <HiOutlineUserGroup className='text-2xl text-normal' /></Link>
                                <button className='border border-[#4c1d95] cursor-pointer  text-[#4c1d95] py-3 px-4 rounded-full flex items-center gap-2'>Read Review <TbMessage2Star className='text-2xl' /></button>
                            </div>
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

export default Bonuses;
