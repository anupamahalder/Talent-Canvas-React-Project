import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobRow from "./JobRow";

const AllJobs = () => {
    // load jobs data 
    const loadedJobs = useLoaderData();
    // declare a state to store jobs data 
    const [jobs, setJobs] = useState(loadedJobs);

    // handle recent post button 
    const handleRecentPost=()=>{
        console.log('clicked recent post button');
        const sortedJobs = [...jobs].sort(function(a,b){
            const dateA = new Date(a.jobPostingDate);
            const dateB = new Date(b.jobPostingDate);
            if(dateA > dateB) return -1;
            else if(dateA < dateB) return 1;
            else return 0;
        })
        console.log(jobs);
        setJobs(sortedJobs);
    }
    // handle old post button
    const handleOldPost=()=>{
        console.log('Cliceked old post button');
        const sortedJobs = [...jobs].sort(function(a,b){
            const dateA = new Date(a.jobPostingDate);
            const dateB = new Date(b.jobPostingDate);
            if(dateA < dateB) return -1;
            else if(dateA > dateB) return 1;
            else return 0;
        })
        console.log(jobs);
        setJobs(sortedJobs);
    }
    // handle all post button
    const handleAllPost=()=>{
        console.log('Cliceked all post button');
        setJobs(loadedJobs);
    }
    // handle search button 
    const handleSearchBtn=(e)=>{
        e.preventDefault();
        const search = e.target.search.value;
        if(search === ""){
            console.log('bye');
            return;
        }
        console.log(search);
        const filteredJobs = loadedJobs.filter(job =>job.jobTitle.toLowerCase().includes(search.toLowerCase()));
        setJobs(filteredJobs);
    }
    return (
        <>
        <div className="pt-10 px-10">
            {/* heading  */}
            <h1 className="mx-auto text-center font-bold uppercase text-2xl text-blue-800 drop-shadow-xl">See All Jobs</h1>
            <div className="md:flex md:gap-2 p-2">
                <div className="md:flex-1 flex gap-2 justify-center md:justify-start">
                    <button onClick={handleRecentPost}
                     className="btn bg-[#3ba51d] text-white hover:bg-[#216b17]">See Recent Post</button>
                    <button onClick={handleOldPost} 
                    className="btn bg-[#348ae6] text-white hover:bg-[#20339e]">See Old Post</button>
                    <button onClick={handleAllPost}
                    className="btn bg-[#e58e26] text-white hover:bg-[#cc8e35]">See All Post</button>
                </div>
                <div className="md:flex-1 pt-2 md:pt-0 flex justify-center md:justify-end">
                    <form onSubmit={handleSearchBtn}>
                        <input className="py-[10px] px-1 md:px-2 rounded-md outline outline-1 mr-2 lg:w-[300px]"
                        type="text" name="search" placeholder="Search job by title"/>
                        <button className="btn bg-[#e64f34] text-white hover:bg-[#b64632]">Search</button>
                    </form>
                </div>
            </div>
            </div>
            <div className="overflow-x-scroll px-4 md:px-10">
            <table className="table">
                {/* head */}
                <thead>
                <tr className="text-xl bg-gray-300 text-gray-600">
                    <th>Name</th>
                    <th>Job Title</th>
                    <th>Job Posting Date</th>
                    <th>Application Deadline</th>
                    <th>Salary Range</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                    {
                        jobs.map(job => <JobRow key={job._id} job={job}></JobRow>)
                    }
                </tbody>
            </table>
            </div>
        </>
    );
};

export default AllJobs;