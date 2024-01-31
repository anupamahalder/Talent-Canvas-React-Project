import React from 'react';

const FAQ = () => {
    return (
        <div className='px-10 pb-16'>
            <h1 className="my-10 drop-shadow-lg text-[#FF6348] text-center text-3xl md:text-4xl lg:text-5xl
                 font-bold">FAQ</h1>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title md:text-xl text-gray-600 font-medium">
            Can I apply to multiple jobs simultaneously?
            </div>
            <div className="collapse-content text-gray-500"> 
                <p>Yes, you can apply to multiple jobs at the same time. Browse through the job listings, and when you find a position that interests you, click on the "Apply" button. Follow the application process, which may include submitting your resume, cover letter, and other relevant documents. You can track the status of your applications in your user dashboard.</p>
            </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title md:text-xl font-medium text-gray-600">
            Will I receive a confirmation email after applying for a job?
            </div>
            <div className="collapse-content text-gray-500"> 
                <p>Yes, you will receive a confirmation email shortly after successfully submitting your job application. This email serves as acknowledgment that your application has been received by the employer or the platform. It may include details such as the job title, company name, and a summary of your application.</p>
            </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title md:text-xl font-medium text-gray-600">
            Can I download a summary of all the jobs I have applied for?
            </div>
            <div className="collapse-content text-gray-500"> 
                <p>Yes, you can download a PDF document containing details of the jobs you have applied for. Look for the "Download PDF" button on your applied jobs page.</p>
            </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title md:text-xl font-medium text-gray-600">
            How do I generate a PDF of my applied jobs?
            </div>
            <div className="collapse-content text-gray-500"> 
                <p>Simply click on the "Download PDF" button, and a PDF document summarizing your applied jobs will be generated and downloaded to your device.
                </p>
            </div>
            </div>
        </div>
    );
};

export default FAQ;