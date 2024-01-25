import PropType from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <div className="p-4">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {jobTitle}
                </h5>
                <p>Posted On: {jobPostingDate}</p>
                <p>Application Deadline: {applicationDeadline}</p>
            </div>
            <div className="pb-4 pt-3 flex gap-4 px-auto mx-auto">
                <button
                    className="mx-auto select-none rounded-lg bg-[#ce2323] hover:bg-[#561c12] py-3.5 px-8 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-[#915146]/20 transition-all hover:shadow-lg hover:shadow-[#472923]/60 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true">Delete</button>
                <Link to=''>
                <button onClick={handleUpdateBtn}
                className="mx-auto select-none rounded-lg bg-[#3b73e4] hover:bg-[#1a2460] py-3.5 px-8 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-[#915146]/20 transition-all hover:shadow-lg hover:shadow-[#472923]/60 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                >
                Update
                </button>
                </Link>
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