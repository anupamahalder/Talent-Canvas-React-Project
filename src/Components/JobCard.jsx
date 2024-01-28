import PropType from 'prop-types';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    // destructure job object 
    const {_id,jobBannerImageUrl,jobTitle,loggedInUserName,jobCategory,category_key,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber} = job;
    return (
        <div className='pb-10'>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-80 lg:w-96 rounded-xl bg-clip-border">
            <div className="relative h-48 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                src={jobBannerImageUrl} alt={jobTitle}/>
            </div>
            <div className="p-4 text-gray-600 space-y-1">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-black h-8 overflow-hidden">
                {jobTitle}</h5>
                <p><span className='font-bold'>Posted By:</span> {loggedInUserName}</p>
                <p><span className='font-bold'>Application Deadline:</span> {applicationDeadline}</p>
                <p><span className='font-bold'>Salary Range:</span> {salaryRange}</p>
                <p><span className='font-bold'>Applicants:</span> {jobApplicantsNumber}</p>
            </div>
            <div className="pb-4">
                <Link to={`/jobdetaildisplay/${_id}`}>
                <button
                className="block w-[120px] mx-auto select-none rounded-lg bg-[#FF6348] hover:bg-[#e95238] py-3.5 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-[#915146]/20 transition-all hover:shadow-lg hover:shadow-[#472923]/60 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                >
                Details
                </button>
                </Link>
            </div>
            </div>
        </div>
    );
};
// Added proptypes 
JobCard.propTypes = {
    job: PropType.object.isRequired,
}
export default JobCard;