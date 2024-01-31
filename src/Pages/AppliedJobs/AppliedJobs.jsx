import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import JobCard from '../../Components/JobCard';
import { usePDF } from 'react-to-pdf';
import { FaDownload } from "react-icons/fa";
import Swal from 'sweetalert2';


const AppliedJobs = () => {
    // declare a state for storing applied data
    const [appliedJob, setAppliedJob] = useState([]);
    const [showAppliedJob, setShowAppliedJob] = useState([]);
    const [selectedJobCategory, setSelectedJobCategory] = useState('alljobs');
    const { toPDF, targetRef } = usePDF({filename: 'appliedJob.pdf'});

    // destructure auth context 
    const {allJob, setAllJob, user} = useAuth();

    // load applied job data 
    useEffect(() => {
        // Fetch applied job data
        fetch(`http://localhost:5050/appliedjob?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAppliedJob(data);
            })
            .catch(error => {
                console.error('Error fetching applied jobs:', error);
            });
    }, [user]);

    // Update showAppliedJob whenever allJob or appliedJob changes
    useEffect(() => {
        // Update allJob by adding isApply: true property
        const updatedAllJob = allJob.map(job => ({
            ...job,
            isApply: appliedJob.some(appliedJob => appliedJob.jobId === job._id),
        }));

        // Set the updated allJob in the context
        setAllJob(updatedAllJob);

        // Update showAppliedJob
        const appliedDataOnly = updatedAllJob.filter(job => job?.isApply === true);
        setShowAppliedJob(appliedDataOnly);
        setSelectedJobCategory(showAppliedJob);
    }, [appliedJob]);

    // handle select category 
    const handleJobCategory = e =>{
        // get the job category which is selected 
        const selectedCategory = e.target.value;

        if(selectedCategory=='alljobs'){
            setSelectedJobCategory(showAppliedJob);
            return;
        }
        setSelectedJobCategory(showAppliedJob);
        // sort the data 
        const sortedJobs = showAppliedJob.filter(item=>item.category_key == selectedCategory);
        // update the showAppliedJob
        console.log(sortedJobs);
        setSelectedJobCategory(sortedJobs);
    }
    // handle pdf download 
    const handlePDFDownload = ()=>{
        // Show loading alert
        Swal.fire({
        title: 'Loading PDF',
        html: 'Please wait...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
            
            // Simulate PDF loading time (replace this with your actual PDF loading logic)
            setTimeout(() => {
            // Close the loading alert
            Swal.close();
            
            // Trigger your PDF download logic here (replace this with your actual logic)
            toPDF();

            // Show success alert (or handle the success scenario as needed)
            Swal.fire({
                icon: 'success',
                title: 'PDF Downloaded Successfully!',
                showConfirmButton: false,
                timer: 1000,
            });
            }, 1000); // Adjust the time as needed
        },
        });
    }
    return (
        <div className="min-h-screen mx-auto">
            {
                showAppliedJob?.length==0 ?
                <div className="flex justify-center items-center w-full h-full">
                    <p className="text-center text-2xl font-bold my-auto shadow-lg">You Have Not Applied To Any Jobs!</p>
                </div>
                : 
                <div className='mx-auto'  ref={targetRef}>
                    <h1 className="mx-auto text-center font-bold uppercase text-2xl text-blue-800 drop-shadow-xl pt-10">Applied Jobs</h1>
                    {/* sort by job category  */}
                    <div className='mb-12 mt-4 flex flex-col-reverse md:flex-row gap-2 md:gap-0 md:flex md:justify-between px-8 md:px-16 items-center'>
                        <div className='flex justify-center items-center gap-2 text-pink-700 underline md:no-underline md:bg-pink-700 md:text-white px-2 py-1 rounded-lg md:font-bold font-sm drop-shadow-lg w-[150px]'>
                        <FaDownload className='inline-block'/>
                        <button onClick={handlePDFDownload}>Download PDF</button>
                        </div>
                        <div className='md:flex-1 mx-auto text-center md:text-right  w-full'>
                        <span className='text-green-700 font-bold uppercase'>Sort By Job Category: </span>
                        <select name="jobSelectCategory"
                         onChange={handleJobCategory}
                         defaultValue='alljobs'
                         className='rounded-sm font-medium ml-2 bg-pink-100 drop-shadow-lg py-1 px-3' id="">
                            <option value="alljobs">All Jobs</option>
                            <option value="fulltime">Full Time</option>
                            <option value="parttime">Part Time</option>
                            <option value="remote">Remote</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="intern">Intern</option>
                            <option value="onsite">On Site</option>
                        </select>
                        </div>
                    </div>
                    {
                        selectedJobCategory.length==0 ? 
                        <div className='h-screen'>
                            <div className='flex justify-center items-center mx-auto w-full h-3/5'>
                            <p className="text-center text-2xl font-bold my-auto shadow-lg">No jobs found in this category!</p>
                        </div>
                        </div>
                        :
                        <div className="px-10 mx-auto grid grid-cols-1 pb-20 md:grid-cols-2 gap-10 lg:grid-cols-3" >
                        {
                            selectedJobCategory.map(job=><JobCard key={job._id} job={job}></JobCard>)
                        }
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default AppliedJobs;