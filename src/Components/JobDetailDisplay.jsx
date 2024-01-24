import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const JobDetailDisplay = () => {
    // load data 
    const job = useLoaderData();
    const {_id,jobBannerImageUrl,jobTitle,loggedInUserName,jobCategory,category_key,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber} = job;

    // destructure auth context 
    const {user,loginUser} = useAuth();
    console.log(user,loginUser);

    const navigate = useNavigate();

    // handle apply button
    const handleApplyBtn = async () => {
        const { value: formValues } = await Swal.fire({
          title: "Apply for the Job",
          html: `
            <input id="swal-input1" class="swal2-input" value=${user?.displayName||loginUser?.name} disabled>
            <input id="swal-input2" class="swal2-input" value=${user?.email} disabled>
            <input id="swal-input3" class="swal2-input" required placeholder="Enter Resume Link">
          `,
          focusConfirm: false,
          preConfirm: () => {
            return {
              username: document.getElementById("swal-input1").value,
              email: document.getElementById("swal-input2").value,
              resumeLink: document.getElementById("swal-input3").value,
            };
          },
        });
      
        if (formValues) {
          // Now you have the form values (username, email, and resumeLink)
          console.log(formValues);
          //if resume link is not valid then show error
          if (isValidURL(formValues.resumeLink)) {
            Swal.fire({
                title: "Good Job,\nSuccessfully Applied to the Job!",
                text: `Applied with Resume Link: ${formValues.resumeLink}`,
                icon: 'success'
            });
          } else {
            console.log("Invalid resume link!");
            Swal.fire({
              icon: "error",
              title: "Invalid Resume Link",
              text: "Please enter a valid URL for the resume link.",
            });
          }
        }
    };
    // Function to check if a string is a valid URL
    const isValidURL = (url) => {
        const pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/\S*)?$/;
        return pattern.test(url);
    };
      
    return (
        <div className="relative mx-10 min-h-screen">
            <h1 className="mx-auto mt-10 mb-8 text-center font-bold uppercase text-2xl text-blue-800 drop-shadow-xl">Details of the Job</h1>
            {/* arrow  */}
            <FaArrowLeftLong onClick={()=>navigate(-1)} className="text-3xl text-gray-500 absolute top-10 left-4 cursor-pointer"/>
        {/* job card  */}
        <div className="md:flex justify-between rounded-lg md:gap-10 bg-gray-50">
            {/* image  */}
            <div className="md:flex-1 flex justify-center items-center rounded-tl-lg rounded-bl-lg bg-gray-100 py-10">
                <img src={jobBannerImageUrl} className="w-[500px] h-[300px] rounded-xl" alt="Job image" />
            </div>
            {/* content  */}
            <div className="md:flex-1 py-10">
                <h1 className="text-3xl font-bold mb-6">{jobTitle}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Job Posted By:</span> {loggedInUserName}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Job Category:</span> {jobCategory}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Salary Range:</span> {salaryRange}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-[#793c26]">Job Description:</span><br /> {jobDescription}</h1>
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