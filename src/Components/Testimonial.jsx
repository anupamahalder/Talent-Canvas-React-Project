import React from 'react';

const Testimonial = () => {
    return (
        <div className='border-t-2 py-2 md:py-10'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center my-10 text-[#FF6348] drop-shadow-xl'>What Our Clients Say</h1>
            <section className="text-gray-600 body-font">
            <div className="container px-5 md:py-10 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -m-4">
                <div className="lg:w-full lg:mb-0 mb-6 p-4">
                    <div className="h-full text-center">
                    <img alt="testimonial" className="w-40 h-40 md:w-60 md:h-60 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <p className="leading-relaxed">Thanks to this job searching website, I found my dream job effortlessly. The intuitive interface, tailored job recommendations, and timely alerts streamlined my search. I'm now thriving in a position perfectly aligned with my skills and aspirations.</p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-xl md:text-2xl">Priya Patel</h2>
                    <p className="text-gray-500 md:text-xl font-semibold">Senior Product Designer</p>
                    </div>
                </div>
                <div className="lg:w-fulll lg:mb-0 mb-6 p-4">
                    <div className="h-full text-center">
                    <img alt="testimonial" className="w-40 h-40 md:w-60 md:h-60 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <p className="leading-relaxed">I'm grateful for the personalized approach of this job searching website. The advanced algorithms, coupled with a vibrant professional community, helped me connect with the right opportunities. I landed a job that aligns perfectly with my goals, thanks to this invaluable platform.</p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-xl md:text-2xl">Rohit Kumar</h2>
                    <p className="text-gray-500 font-semibold md:text-xl">Civil Engineer</p>
                    </div>
                </div>
                <div className="lg:w-full lg:mb-0 p-4">
                    <div className="h-full text-center">
                    <img alt="testimonial" className="w-40 h-40 md:w-60 md:h-60 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <p className="leading-relaxed">This job search platform's tools and resources were instrumental in securing my ideal job. The resume support, interview prep, and extensive job listings made the process seamless. I highly recommend this website for anyone serious about advancing their career.</p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-xl md:text-2xl">Nisha Gupta</h2>
                    <p className="text-gray-500 font-semibold md:text-xl">React Developer</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
};

export default Testimonial;