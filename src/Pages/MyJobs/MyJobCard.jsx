import PropType from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const MyJobCard = ({job}) => {
    // destructure job object 
    const {_id,jobBannerImageUrl,jobTitle,loggedInUserName,jobCategory,category_key,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber} = job;
    // declare a state 
    const [updateData, setUpdateData] = useState([]);
    // handle update button 
    const handleUpdateBtn = () =>{
        console.log('update btn is clicked!', _id);

    }
    return (
        <div className='pb-10'>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                src={jobBannerImageUrl} alt={jobTitle}/>
            </div>
            <div className="p-4 text-gray-600 space-y-1 capitalize">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-black h-8 overflow-hidden">
                {jobTitle}</h5>
                <p><span className='font-bold'>Posted By:</span> {loggedInUserName}</p>
                <p><span className='font-bold'>Application Deadline:</span> {applicationDeadline}</p>
                <p><span className='font-bold'>Salary Range:</span> {salaryRange}</p>
                <p><span className='font-bold'>Applicants:</span> {jobApplicantsNumber}</p>
            </div>
            <div className="pb-6 flex gap-4 px-auto cursor-pointer text-white mx-auto">
                <Link to={`/jobdetaildisplay/${_id}`}>
                <FaEye title='See Details' className='bg-blue-700 text-4xl p-1 rounded-full'/>
                </Link>
                <Link to={`/myjobupdate/${_id}`}>
                <CiEdit title='Update' className='bg-green-700 text-4xl p-1 rounded-full' />
                </Link>
                <MdDelete title='Delete' className='bg-red-700 text-4xl p-1 rounded-full'/>
            </div>
            </div>
        </div>
    );
};
// Added proptypes 
MyJobCard.propTypes = {
    job: PropType.object.isRequired,
}
export default MyJobCard;