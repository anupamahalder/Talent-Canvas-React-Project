import React from 'react';

const AddJobs = () => {

    // handle add jobs 
    const hanldeAddJob = (e) =>{
        e.preventDefault();
        const form = e.target;

    }
    return (
        <div className='min-h-screen pt-20 px-10 flex justify-center mb-20'>
                <div className='bg-[#fdf1ee] text-[#555555] w-[600px] p-4 shadow-2xl rounded-lg text-xl'>
                <h1 className="mx-auto text-center font-bold uppercase text-2xl text-blue-800 drop-shadow-xl my-6">Add Your Job</h1>
                    <form onSubmit={hanldeAddJob}  >
                        <span className='uppercase pl-4 font-semibold text-gray-700 mr-3'>Job Title:</span>
                        <input className='outline outline-1 mt-2 hover:outline-2 outline-slate-300 hover:outline-gray-800 rounded-md w-3/5' type="text" name="jobTitle" id="" /> <br /><br />

                        <span className='uppercase pl-4 font-semibold text-gray-700'>Picture URL of the Job Banner: </span>
                        <input className='ml-6 outline mt-2 outline-1 outline-slate-300 rounded-lg w-3/4 hover:outline-2 hover:outline-gray-800' type="text" name="banner" id="" /><br /><br />

                        <span className='uppercase pl-4 font-semibold text-gray-700'>Salary Range:</span><br />
                        <input type="number" className='mt-2 w-40 px-2 mr-10 ml-6 outline outline-1 outline-slate-300 rounded-lg hover:outline-2 hover:outline-gray-800' name='lowestSalary' placeholder='lowest salary' />
                        <input type="number" className='mt-2 w-40 px-2 outline outline-1 outline-slate-300 rounded-lg hover:outline-2 hover:outline-gray-800' name='highestSalary' placeholder='highest salary' /> <br /><br />

                        <span className='uppercase pl-4 font-semibold text-gray-700'>Job Description:</span><br />
                        <textarea name="jobDescription" className='outline outline-1 outline-slate-300 rounded-lg mt-2 w-5/6 mx-6 hover:outline-2 hover:outline-gray-800' id="" cols="10" rows="5"></textarea><br /><br />

                        <span className='uppercase pl-4 font-semibold text-gray-700'>Application Deadline:  </span>
                        <input className='outline outline-1 outline-slate-300 rounded-lg hover:outline-2 hover:outline-gray-800' type="date" placeholder='select date' name="applicationDeadline" id="" />
                    </form>
                </div>
        </div>
    );
};

export default AddJobs;