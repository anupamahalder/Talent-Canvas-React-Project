import React from 'react';
import { TiTick } from "react-icons/ti";


const StepsForApply = () => {
    return (
        <div className='lg:flex justify-around my-6 md:my-10 md:px-2 mx-auto'>
            <div className='md:flex-1 w-5/6 mx-auto md:w-full relative pb-10 md:pb-0'>
                <img src="https://www.shutterstock.com/image-vector/young-man-working-on-laptop-600nw-2137930253.jpg" alt="" />
                <div className='bg-gray-200 rounded-xl absolute bottom-2 right-24 md:bottom-36 lg:bottom-1/3 md:right-36 w-[140px] md:w-[180px] p-2'>
                    <p className='text-xl md:text-xl lg:text-2xl font-bold'>Applied to</p>
                    <h1 className='text-blue-700 text-2xl md:text-3xl font-bold'>150+ Jobs</h1>
                </div>
            </div>
            <div className='md:flex-1 flex-col justify-center items-center md:mt-12'>
                <div className='flex gap-2 justify-center'>
                    <span className='text-[90px] md:text-[140px] lg:text-[160px] font-extrabold text-blue-700'>3</span>
                    <div className='pt-8 md:pt-16'>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-extrabold'>Easy Steps To Apply </h1>
                        <p className='text-sm md:text-xl mt-2 md:mt-4 text-gray-400 font-semibold text-ce'>Apply to your dream jobs in just 3 steps</p>
                    </div>
                </div>
                <div className='md:text-xl font-semibold text-gray-500 pl-10 md:pl-0 md:ml-40'>
                    <TiTick className='text-green-500 text-4xl md:text-6xl inline-block'/><span>Search for your desired job.</span> <br />
                    <TiTick className='text-green-500 text-4xl md:text-6xl inline-block'/><span>Choose your field or industry.</span> <br />
                    <TiTick className='text-green-500 text-4xl md:text-6xl inline-block'/><span>Apply by uploading your resume.</span><br />
                </div>
            </div>
        </div>
    );
};

export default StepsForApply;