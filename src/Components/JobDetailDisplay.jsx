import { useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const JobDetailDisplay = () => {
    // load data 
    const job = useLoaderData();
    const {_id,jobBannerImageUrl,jobTitle,loggedInUserName,jobCategory,category_key,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber} = job;

    // handle arrow 
    const handleArrow = () =>{
        console.log('arrow button clicked!');
    }
    // handle apply button
    const handleApplyBtn = () =>{
        console.log('apply button clicked!');
    }
    return (
        <div className="relative mx-10">
            <h1 className="mx-auto mt-10 mb-8 text-center font-bold uppercase text-2xl text-blue-800 drop-shadow-xl">Details of the Job</h1>
            {/* arrow  */}
            <FaArrowLeftLong onClick={handleArrow} className="text-3xl text-gray-500 absolute top-10 left-4 cursor-pointer"/>
        {/* job card  */}
        <div className="md:flex justify-between rounded-lg md:gap-10 bg-gray-50 py-10">
            {/* image  */}
            <div className="md:flex-1 flex justify-center items-center">
                <img src={jobBannerImageUrl} className="w-[500px] h-[300px] rounded-xl" alt="Job image" />
            </div>
            {/* content  */}
            <div className="md:flex-1">
                <h1 className="text-3xl font-bold mb-6">{jobTitle}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Job Posted By:</span> {loggedInUserName}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Job Category:</span> {jobCategory}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Salary Range:</span> {salaryRange}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Job Description:</span><br /> {jobDescription}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Job Posting Date:</span> {jobPostingDate}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Applicant Deadline:</span> {applicationDeadline || "N/A"}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Job Applicant Numbers:</span> {jobApplicantsNumber}</h1>
                <div className="flex justify-center">
                <button onClick={handleApplyBtn}
                 className="btn bg-red-600 hover:bg-red-700 text-white">Apply Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default JobDetailDisplay;