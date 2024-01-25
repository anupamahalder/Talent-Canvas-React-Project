import axios from 'axios';
import PropType from 'prop-types';
import { useEffect, useState } from 'react';
import JobCard from './JobCard';
import useAuth from '../Hooks/useAuth';
const JobDisplay = ({categoryName}) => {
    // declare state to hold job data 
    const [jobs, setJobs] = useState([]);
    // declare a state to hold the data of show all 
    const [isShowAll, setIsShowAll] = useState(false);
    // destructure useAuth 
    const {allJob} = useAuth();

    useEffect(() => {
        let jobData;

        if (categoryName === 'alljobs') {
            jobData = allJob;
        } else {
            jobData = allJob.filter(job => job.key_name === categoryName);
        }

        setJobs(jobData);
    }, [categoryName, allJob]);
    
    return (
        <div className='mx-auto mt-16'>
            <div className='px-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                isShowAll ? jobs.map(job => <JobCard key={job._id} job={job}></JobCard>):
                jobs.slice(0,6).map(job => <JobCard key={job._id} job={job}></JobCard>)
            }
            </div>
            {
                jobs.length > 6 &&
                <div className='mx-auto text-center'>
                    <button onClick={()=>setIsShowAll(!isShowAll)} className='text-blue-700 text-xl font-bold hover:text-red-700 uppercase'>{
                        isShowAll ? "See Less" : "See More"
                    }</button>
                </div>
            }
        </div>
    );
};

// Added propTypes 
JobDisplay.propTypes = {
    categoryName: PropType.string.isRequired,
}
export default JobDisplay;