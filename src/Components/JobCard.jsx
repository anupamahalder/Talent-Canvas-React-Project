import PropType from 'prop-types';

const JobCard = ({job}) => {
    // destructure job object 
    const {jobBannerImageUrl,jobTitle,loggedInUserName,jobCategory,category_key,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber} = job;
    return (
        <div className='pb-10'>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                src={jobBannerImageUrl}
                />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {jobTitle}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                The place is close to Barceloneta Beach and bus stop just 2 min by walk
                and near to "Naviglio" where you can enjoy the main night life in
                Barcelona.
                </p>
            </div>
            <div className="p-6 pt-3">
                <button
                className="block w-1/2 mx-auto select-none rounded-lg bg-[#FF6348] py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-[#FF6348]/20 transition-all hover:shadow-lg hover:shadow-[#9a3624]/60 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                >
                See Details
                </button>
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