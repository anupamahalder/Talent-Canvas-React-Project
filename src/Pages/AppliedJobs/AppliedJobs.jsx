import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import JobCard from '../../Components/JobCard';

const AppliedJobs = () => {
    // declare a state for storing applied data
    const [appliedJob, setAppliedJob] = useState([]);
    const [showAppliedJob, setShowAppliedJob] = useState([]);

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
    }, [appliedJob]);

    return (
        <div className="min-h-screen">
            {
                showAppliedJob?.length==0 ?
                <div className="flex justify-center items-center w-full h-full">
                    <p className="text-center text-2xl font-bold my-auto shadow-lg">You Have Not Applied To Any Jobs!</p>
                </div>
                : 
                <div>
                    <h1 className="mx-auto text-center font-bold uppercase text-2xl text-blue-800 drop-shadow-xl pt-10 pb-16">Applied Jobs</h1>
                    <div className="px-10 grid grid-cols-1 pb-20 md:grid-cols-2 gap-10 lg:grid-cols-3">
                    {
                        showAppliedJob.map(job=><JobCard key={job._id} job={job}></JobCard>)
                    }
                    </div>
                </div>
            }
        </div>
    );
};

export default AppliedJobs;