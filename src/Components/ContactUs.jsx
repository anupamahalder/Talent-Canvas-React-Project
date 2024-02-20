import React, { useRef } from 'react';
import useAuth from '../Hooks/useAuth';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import AOS from 'aos';
const ContactUs = () => {
    const {user, loginUser} = useAuth();
    const form = useRef();

    // handle send email 
    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_lu1azeq', 'template_jzzzrsn', form.current, '9MT5PWD0Vk57sX2mm')
        .then((result) => {
            Swal.fire({
                title: "Thank You!",
                text: "We got your email successfully!",
                icon: 'success'
            })
            // Clear the value of the message field
            form.current.message.value = '';
        }, (error) => {
            Swal.fire({
                title: "Sorry!",
                text: "Failed to send the email!",
                icon: 'error'
            })
        });
    }
    return (
        <div className='mx-auto'>
            <section className="body-font md:flex md:justify-between md:items-center relative md:px-10">
            <div className="flex-1 w-3/4 md:w-full mx-auto" data-aos="flip-right">
                <img src="https://blush.design/api/download?shareUri=9N70qQtJZ-af2LTu&c=Hair_0%7E3164cf-0.2%7Efe5c4f_Skin_0%7E8c72cb-0.2%7Eef9e89&w=800&h=800&fm=png" alt="" />
            </div>
            <div data-aos="flip-right" className="container -mt-12 md:mt-0 px-5 md:py-12 mx-auto md:flex-1 flex drop-shadow-2xl">
                <div className="bg-white rounded-lg p-8 flex flex-col md:ml-auto lg:w-4/5 mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-blue-800 text-2xl lg:text-3xl mb-4 font-bold title-font">Feel free to contact us...💙</h2>
                <p className="leading-relaxed mb-5 text-gray-600">We welcome your feedback, suggestions, or queries anytime - your input is important to us!</p>
                <form onSubmit={sendEmail} ref={form}>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" placeholder='Enter your name' defaultValue={(user?.displayName) || (loginUser?.name)} required name="from_name" className="w-full bg-white rounded border border-gray-300 focus:border-[#f87760] focus:ring-1 focus:ring-[#ff836d] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" defaultValue={user?.email} placeholder='Enter your email' required name="from_email" className="w-full bg-white rounded border border-gray-300 focus:border-[#f87760] focus:ring-1 focus:ring-[#ff836d] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" type="text" placeholder='Enter your message' name="message" className="w-full bg-white rounded border border-gray-300 focus:border-[#f87760] focus:ring-1 focus:ring-[#ff836d] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                {/* Hidden input field for website_name */}
                <input type="hidden" name="website_name" value="Talent Canvas" />
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