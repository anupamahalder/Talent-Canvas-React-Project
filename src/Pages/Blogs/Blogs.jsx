import React, { useState } from 'react';
import Blog from './Blog';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    const [readMore, setReadMore] = useState(false);
    //declare a state to change button name
    const [btnName, setBtnName] = useState('Read More');
    //function
    const handleBtn = () =>{
        setReadMore(!readMore);
        setBtnName('Read Less');
    }
    const blogContent =[
        {
            id: 1,
            title: "Crafting an Outstanding Resume",
            content: "Your resume is often the first impression you make on a potential employer. Learn how to create a standout resume that highlights your skills and experiences. We'll cover the essential elements, formatting tips, and examples to help you get noticed by recruiters. Your resume is the key to opening doors in your job search. This blog post will take you through each section of a resume, offering practical tips on how to showcase your skills, experiences, and achievements effectively. Learn about resume formats, keyword optimization, and ways to tailor your resume for different job applications."
        },
        {
            id: 2,
            title: "Navigating the Job Market : Strategies for Success",
            content: "Discover effective strategies for navigating the competitive job market. From networking tips to leveraging online platforms, we'll guide you through the process of finding and applying for the right opportunities. Stay ahead of the curve and increase your chances of landing your dream job. In a competitive job market, knowing how to stand out is crucial. This blog post dives into the strategies that can help you navigate the job market successfully. From utilizing professional networks to leveraging job search platforms, you'll gain insights into effective job search techniques and the latest trends in recruitment."
        },
        {
            id: 3,
            title: "Mastering the Art of Job Interviews",
            content: "Preparing for a job interview is crucial to success. Explore common interview questions, best practices for answering them, and strategies to showcase your strengths. Whether it's a traditional in-person interview or a virtual meeting, we've got you covered with expert advice. Preparing for job interviews can be nerve-wracking, but proper preparation is the key to success. This post will guide you through common interview questions, providing thoughtful responses and strategies for handling challenging scenarios. Learn about body language, virtual interview etiquette, and ways to leave a lasting impression."
        },
        {
            id: 4,
            title: "Building a Strong Online Presence: Your Digital Brand",
            content: "In today's digital age, your online presence matters. Learn how to build a professional and impactful digital brand. We'll discuss the importance of LinkedIn, personal websites, and social media in enhancing your visibility to employers and recruiters. In today's digital landscape, employers often research candidates online. This blog post explores the importance of cultivating a strong digital brand. Discover how to optimize your LinkedIn profile, create a personal website, and strategically use social media to enhance your professional image."
        },
        {
            id: 5,
            title: "Navigating Career Transitions: A Guide to Switching Industries",
            content: "Thinking about changing careers? Understand the steps involved in making a successful career transition. We'll explore transferable skills, networking in a new industry, and ways to effectively communicate your value to potential employers. Considering a career change? This post will walk you through the steps involved in transitioning to a new industry. Learn how to identify transferable skills, connect with professionals in your desired field, and articulate your unique value to employers in a different sector."
        },
        {
            id: 6,
            title: "Wellness and Productivity: Balancing Work and Life",
            content: "Maintaining a healthy work-life balance is essential for long-term career success. Discover tips for managing stress, staying productive, and achieving a harmonious balance between your professional and personal life. Maintaining a healthy work-life balance is essential for long-term career satisfaction. This blog post offers practical tips on managing stress, setting boundaries, and prioritizing self-care. Discover strategies for staying productive while preserving your well-being."
        },
        {
            id: 7,
            title: "Career Advancement: Strategies for Climbing the Corporate Ladder",
            content: "Once you've secured a job, what's next? Explore strategies for career advancement, including skill development, effective communication in the workplace, and positioning yourself for promotions. Once you've landed a job, how can you position yourself for growth? This post delves into strategies for career advancement, including continuous learning, effective communication in the workplace, and building strong relationships with colleagues and supervisors." 
        },
        {
            id: 8,
            title: "Navigating Remote Work: Tips for Success",
            content: "Remote work has become more prevalent than ever. Learn how to thrive in a remote work environment, from setting up a productive home office to staying connected with your team. Remote work has become a standard practice for many professionals. This post provides insights into successfully navigating a remote work environment. Explore tips for setting up a productive home office, maintaining communication with remote teams, and striking a balance between work and home life."
        }
    ]
    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>Talent Canvas | Blogs</title>
            </Helmet>
            <h1 className="mx-auto text-center font-bold uppercase text-2xl text-blue-800 drop-shadow-xl pt-10">Blogs</h1>
            <div className="min-h-screen">
                {
                    blogContent.map(item=>
                        <div className="px-2 md:px-10 py-4">
                            <h1 className='text-2xl px-2 font-bold text-gray-700'>{item.id}. {item.title}</h1>
                            <p className='my-6 md:text-xl text-gray-500 px-4'>{item.content}</p>
                            <hr />
                        </div>
                    )
                }
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-blue-700 px-4 md:px-10 font-bold'>Stay Tuned for More Insights!</h1>
                <p className='px-4 md:px-10 my-10 text-gray-600'>Our job hunting blog is your go-to resource for valuable insights, tips, and advice on navigating the ever-evolving job market. Check back regularly for the latest updates and empower yourself on your journey to professional success.</p>
            </div>
        </div>
    );
};

export default Blogs;
