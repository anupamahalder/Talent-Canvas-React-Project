import React from 'react';
import useAuth from '../Hooks/useAuth';

const ContactUs = () => {
    const {user} = useAuth();
    // handle send email 
    const handleSendBtn = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        
    }
    return (
        <div className='mx-auto my-20'>
            <section className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
                <iframe width="100%" height="100%" title="map"
                  loading="lazy"  // Add the loading attribute
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.33439927742!2d88.34735275!3d22.53542735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700591780340!5m2!1sen!2sin"></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-gray-900 text-2xl mb-4 font-bold title-font">Feel Free To Contact Us</h2>
                <p className="leading-relaxed mb-5 text-gray-600">We welcome your feedback, suggestions, or queries anytime - your input is important to us!</p>
                <form onSubmit={handleSendBtn}>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" placeholder='Enter your name' required name="name" className="w-full bg-white rounded border border-gray-300 focus:border-[#f87760] focus:ring-1 focus:ring-[#ff836d] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" defaultValue={user?.email} placeholder='Enter your email' required name="email" className="w-full bg-white rounded border border-gray-300 focus:border-[#f87760] focus:ring-1 focus:ring-[#ff836d] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" type="text" placeholder='Enter your message' name="message" className="w-full bg-white rounded border border-gray-300 focus:border-[#f87760] focus:ring-1 focus:ring-[#ff836d] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <div className='flex justify-center'>
                <button className="text-white bg-[#FF6348] border-0 py-2 px-6 focus:outline-none hover:bg-[#c94e39] rounded text-lg uppercase font-bold">Send</button>
                </div>
                </form>
                </div>
            </div>
            </section>
        </div>
    );
};

export default ContactUs;