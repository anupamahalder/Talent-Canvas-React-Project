import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import axios from "axios";
import emailjs from '@emailjs/browser';


const JobDetailDisplay = () => {
    // load data 
    // destructure auth context 
    const {user,loginUser, allJob} = useAuth();
    const {id} = useParams();
    // filter data by id     
    const job = allJob.find(item=>item._id===id);
    // destructure required data 
    const {jobBannerImageUrl,jobTitle,loggedInUserName,jobCategory,category_key,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber} = job;
    // declare a state 
    const [applicantNo, setApplicantNo] = useState(jobApplicantsNumber);
    const [isApplied, setIsApplied] = useState(job?.isApply);

    const location = useLocation();
    const navigate = useNavigate();
    // Get the previous path from the state or set it to '/'
    const previousPath = location.state?.from || '/';

    // Check if the previous path is login or register
    const isPreviousLoginOrRegister =
      previousPath === '/login' || previousPath === '/register';
    console.log(previousPath, isPreviousLoginOrRegister);

    // Function to handle the arrow icon click
    const handleGoBack = () => {
      if (previousPath=='/') {
        // If previous path is login or register, go to the home page
        navigate(-1);
      } else {
        // If previous path is neither login nor register, go back one step
        navigate(-2);
      }
    };

    // handle apply button
    const handleApplyBtn = async () => {
      
      const currentDate = new Date().toISOString().split('T')[0];
      // Assuming applicationDeadline is in the format 'YYYY-MM-DD'
      const deadline = {applicationDeadline};
      const targetDate = deadline.applicationDeadline;

      // Convert targetDate to a comparable format (Date object)
      const targetDateObject = new Date(targetDate);

      // Compare dates
      if (targetDateObject < new Date(currentDate)) {
          Swal.fire({
            title: "Oops!",
            text: "Deadline is over!",
            icon: 'info'
          })
        return;
      }
      // handle same person is posting the job or not 
      if(job?.userEmail == user.email){
        Swal.fire({
          title: "Oops!",
          text: "You cannot apply to your own job post!",
          icon: 'info'
        })
        return;
      }

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
            //   username: document.getElementById("swal-input1").value,
              email: document.getElementById("swal-input2").value,
              resumeLink: document.getElementById("swal-input3").value,
            };
          },
        });
      
        if (formValues) {
          // Now you have the form values (username, email, and resumeLink)
        //   console.log(formValues);
          //if resume link is not valid then show error
          if (isValidURL(formValues.resumeLink)) {
            const jobId = id;
            const applyJobData = {...formValues,jobId};
            axios.post('https://talent-canvas-server-side.vercel.app/appliedjob',applyJobData)
            .then(data=>{
                if(data.data.insertedId){ 
                    Swal.fire({
                        title: "Good Job,\nSuccessfully Applied to the Job!",
                        text: `Applied with Resume Link: ${formValues.resumeLink}`,
                        icon: 'success'
                    });
                    // increment applicant value by 1 to database 
                    axios.post(`https://talent-canvas-server-side.vercel.app/update-job-increment/${id}`)
                    .then(data=>{
                      console.log(data.data);
                      // update applicant number in the UI
                      setApplicantNo(applicantNo+1);
                      // update the apply button 
                      setIsApplied(true);
                    })
                    // send email
                    const mailData ={
                      job_holder_name: loggedInUserName,
                      applier_name: user?.displayName || loginUser?.name,
                      jobId: id,
                      jobTitle: jobTitle,
                      resumeLink: formValues.resumeLink,
                      applier_email: user?.email,
                      job_holder_email: job?.userEmail || "anupamahalder2020@gmail.com"
                    }
                    console.log(mailData)
                    emailjs.send('service_evzvpfc', 'template_55gqpur', mailData,'9MT5PWD0Vk57sX2mm')
                        .then(function(response) {
                          Swal.fire({
                            title: 'Confirmation email has sent to you',
                            icon: 'success'
                          })
                           console.log('SUCCESS!', response.status, response.text);
                        }, function(error) {
                           console.log('FAILED...', error);
                        });
                }
                else{
                    Swal.fire({
                        title: "Sorry!",
                        text: `Failed to apply to the job!`,
                        icon: 'error'
                    });
                }
            })
            .catch(err=>{
                console.log('error to post applied job data');
            })
            
          } else {
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
            <h1 className="mx-auto mt-10 mb-8 text-center font-bold uppercase text-xl md:text-2xl text-blue-800 drop-shadow-2xl">Details of the Job</h1>
            {/* arrow  */}
            <FaArrowLeftLong onClick={handleGoBack} className="text-xl md:text-3xl text-gray-500 absolute top-5 md:top-10 md:left-4 cursor-pointer"/>
        {/* job card  */}
        <div className="md:flex justify-between rounded-lg md:gap-10 md:bg-gray-50 mb-20">
            {/* image  */}
            <div className="md:flex-1 flex justify-center items-center rounded-tl-lg rounded-bl-lg md:bg-gray-100 md:py-10">
                <img src={jobBannerImageUrl} className="w-[350px] md:w-[500px] h-[300px] rounded-xl" alt="Job image" />
            </div>
            {/* content  */}
            <div className="md:flex-1 px-2 md:py-10">
                <h1 className="text-3xl font-bold mb-6 capitalize">{jobTitle}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Job Posted By:</span> {loggedInUserName}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Job Category:</span> {jobCategory}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Salary Range:</span> {salaryRange}</h1>
                <h1 className="mb-3 capitalize"><span className="font-bold uppercase text-[#793c26]">Job Description:</span><br /> {jobDescription}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Job Posting Date:</span> {jobPostingDate}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Applicant Deadline:</span> {applicationDeadline || "N/A"}</h1>
                <h1 className="mb-3"><span className="font-bold uppercase text-blue-900">Job Applicant Numbers:</span> {applicantNo}</h1>
                <div className="flex justify-center">
                <button onClick={handleApplyBtn} disabled={isApplied}
                 className="btn bg-red-600 hover:bg-red-700 text-white">{
                  isApplied ? "Already Applied" : "Apply Now"
                 }</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default JobDetailDisplay;