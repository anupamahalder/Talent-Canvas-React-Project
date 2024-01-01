import axios from 'axios';
import PropType from 'prop-types';
import { useEffect, useState } from 'react';
import JobCard from './JobCard';
const JobDisplay = ({categoryName}) => {
    // declare state to hold job data 
    const [jobs, setJobs] = useState([]);
    // declare a state to hold the data of show all 
    const [isShowAll, setIsShowAll] = useState(false);
    let url;
    // set url 
    if(categoryName == 'alljobs'){
        url = 'http://localhost:5050/alljobs';
    }
    else{
        url = `http://localhost:5050/jobs?category_key=${categoryName}`;
    }
    // load data 
    useEffect(()=>{
        axios.get(url)
        .then(data =>{
            const jobData = data.data;
            setJobs(jobData);
        })
    },[]);
    return (
        <div className='mx-auto mt-16 pb-20'>
            <div className='px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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