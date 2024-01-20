import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCard from "../../Components/JobCard";
import JobRow from "./JobRow";

const AllJobs = () => {
    // load jobs data 
    const loadedJobs = useLoaderData();
    // declare a state to store jobs data 
    const [jobs, setJobs] = useState(loadedJobs);
    return (
        <div className="p-10 mx-auto">
            {/* heading  */}
            <h1 className="mx-auto text-center font-bold uppercase text-2xl text-blue-800 text-shadow">See All Jobs</h1>
            <div className="md:flex bg-gray-100 p-2">
                <div className="md:flex-1 flex gap-2 justify-start">
                    <button className="btn bg-[#3ba51d] text-white hover:bg-[#216b17]">See Recent Post</button>
                    <button className="btn bg-[#348ae6] text-white hover:bg-[#20339e]">See Old Post</button>
                </div>
                <div className="md:flex-1 flex justify-end">
                    <div className="">
                        <input className="py-3 px-1 md:px-2 rounded-md outline outline-1 mr-2"
                        type="text" placeholder="Search job by title"/>
                        <button className="btn bg-[#e64f34] text-white hover:bg-[#b64632]">Search</button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr className="text-2xl bg-gray-500 text-base-200">
                    <th>Name</th>
                    <th>Job Title</th>
                    <th>Job Posting Date</th>
                    <th>Application Deadline</th>
                    <th>Salary Range</th>
                    <th>Details</th>
                </tr>
                </thead>
                {
                    jobs.map(job => <JobRow key={job.id} job={job}></JobRow>)
                }
            </table>
            </div>
        </div>
    );
};

export default AllJobs;