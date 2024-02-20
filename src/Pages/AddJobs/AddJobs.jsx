import React, { useRef, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AddJobs = () => {
    
    // destructure authcontext values 
    const {user, loginUser, setAllJob, allJob} = useAuth();

    const formRef = useRef();

    // handle add jobs 
    const hanldeAddJob = (e) => {
      e.preventDefault();
      const form = e.target;
      const jobBannerImageUrl = form.bannerUrl.value;
  
      // Validate image URL
      const img = new Image();
      img.onerror = () => {
          // Image failed to load
          Swal.fire({
              title: "Invalid Image URL",
              text: "Please provide a valid image URL",
              icon: "error"
          });
      };
      img.onload = () => {
          // Image loaded successfully, proceed with form submission
          const jobTitle = form.jobTitle.value;
          const loggedInUserName = user.displayName || loginUser.name;
          const userEmail = user.email;
          const category_key = form.jobCategory.value;
          const jobCategory = form.jobCategory.options[form.jobCategory.selectedIndex].getAttribute('fullname');
          const highestSalary = form.highestSalary.value;
          const lowestSalary = form.lowestSalary.value;
          const jobDescription = form.jobDescription.value;
          const jobPostingDate = new Date().toISOString().split('T')[0];
          const applicationDeadline = form.applicationDeadline.value;
          const jobApplicantsNumber = 0;
          const salaryRange = `$${lowestSalary}-$${highestSalary}`;
  
          // Validate salary inputs
          if (lowestSalary < 0 || highestSalary < 0) {
              Swal.fire({
                  title: 'Error!',
                  text: 'Salary cannot be negative',
                  icon: 'error',
              });
              return; // Stop execution if validation fails
          }
          if (parseInt(highestSalary) < parseInt(lowestSalary)) {
              Swal.fire({
                  title: 'Error!',
                  text: 'Higest salary cannot be lesser than the lowest salary',
                  icon: 'error',
              });
              return; // Exit the function
          }
  
          // Make an object to post data to the server 
          const jobDetails = {jobTitle, jobBannerImageUrl, loggedInUserName, userEmail, jobCategory, category_key, salaryRange, jobDescription, jobPostingDate, applicationDeadline, jobApplicantsNumber};
  
          fetch('https://talent-canvas-server-side.vercel.app/alljobs', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(jobDetails)
          })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {
                  // Load single data 
                  const jobId = data.insertedId;
                  fetch(`https://talent-canvas-server-side.vercel.app/job-detail/${jobId}`)
                  .then(res => res.json())
                  .then(jobData => {
                      setAllJob([...allJob, jobData]);
                  });
                  Swal.fire({
                      title: 'Successful!',
                      text: "Job Added Successfully to Database",
                      icon: 'success',
                  });
                  form.reset();
              }
          });
      };
    img.src = jobBannerImageUrl;
  };
  
    // handle reset a form 
    const handleResetForm = () =>{
      Swal.fire({
        title: "Are you sure?",
        text: "Do You want to reset the form?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Reset"
      }).then((result) => {
        if (result.isConfirmed) {
            formRef.current.reset();
        }
      });
    }
    return (
        <div className='min-h-screen py-10 md:py-20 md:px-10 flex justify-center mb-20'>
          <Helmet>
              <title>Talent Canvas | Add Jobs</title>
          </Helmet>
          <div className='bg-[#fbebe6] text-[#555555] w-[330px] md:w-[500px] p-4 shadow-2xl rounded-lg md:text-xl'>
            <h1 className="mx-auto text-center font-bold uppercase text-2xl md:text-3xl text-blue-800 drop-shadow-xl my-6">Add Your Job</h1>
                <form onSubmit={hanldeAddJob} ref={formRef} >
                    {/* job title  */}
                    <span className='uppercase md:pl-4 font-semibold text-gray-700 mr-3'>Job Title:</span>
                    <input required className='outline pl-2 outline-1 mt-2 hover:outline-2 outline-slate-300 hover:outline-gray-800 rounded-md w-3/5' type="text" name="jobTitle" id="" /> <br /><br />
                    {/* picture url  */}
                    <span className='uppercase md:pl-4 font-semibold text-gray-700'>Picture URL of the Job Banner: </span>
                    <input required className='ml-6 pl-2 outline mt-2 outline-1 outline-slate-300 rounded-lg w-4/5 hover:outline-2 hover:outline-gray-800' type="text" name="bannerUrl" id="" /><br /><br />
                    {/* select job category  */}
                    <span className='uppercase md:pl-4 font-semibold text-gray-700'>Choose Job Category: </span>

                    <select name="jobCategory" className='bg-white py-1 w-1/3 ml-2 pl-2 outline mt-2 outline-1 outline-slate-300 rounded-lg hover:outline-2 hover:outline-gray-800' id="jobCategory">
                    <option value="fulltime" fullname="Full Time Job" defaultChecked>Full Time</option>
                    <option value="parttime" fullname="Part Time Job">Part Time</option>
                    <option value="remote" fullname="Remote Job">Remote</option>
                    <option value="hybrid" fullname="Hybrid Job">Hybrid</option>
                    <option value="onsite" fullname="On Site Job">On Site</option>
                    <option value="intern" fullname="Intern Job">Intern</option>
                    </select> <br /><br />

                    {/* salary range  */}
                    <span className='uppercase md:pl-4 font-semibold text-gray-700'>Salary Range:</span><br />
                    <input required type="number" className='mt-2 w-40 px-2 md:mr-10 md:ml-6 outline outline-1 outline-slate-300 rounded-lg hover:outline-2 hover:outline-gray-800' name='lowestSalary' placeholder='lowest salary' />
                    <input required type="number" className='mt-2 w-40 px-2 outline outline-1 outline-slate-300 rounded-lg hover:outline-2 hover:outline-gray-800' name='highestSalary' placeholder='highest salary' /> <br /><br />
                    {/* job description  */}
                    <span className='uppercase md:pl-4 font-semibold text-gray-700'>Job Description:</span><br />
                    <textarea required name="jobDescription" className='outline outline-1 pl-2 outline-slate-300 rounded-lg mt-2 w-5/6 mx-6 hover:outline-2 hover:outline-gray-800' id="" cols="10" rows="5"></textarea><br /><br />
                    {/* date input  */}
                    <span className='uppercase md:pl-4 font-semibold text-gray-700'>Application Deadline:  </span>
                    <input required
                      className='outline outline-1 px-2 outline-slate-300 rounded-lg hover:outline-2 hover:outline-gray-800' type="date" placeholder='select date' name="applicationDeadline" 
                      min={new Date().toISOString().split('T')[0]}
                      id="customeDate" /> <br />
                      <div className='flex justify-center my-8 md:my-10'>
                      {
                        // type="reset"
                        <button onClick={handleResetForm} type='button'
                          className='btn mr-2 md:text-xl bg-gray-500 text-white hover:bg-white hover:text-gray-800'>Reset Form</button>
                      }
                      <input type="submit" className='btn md:text-xl bg-[#FF6348] text-gray-700 hover:text-white hover:bg-red-700' value="Submit Job" />
                      </div>
                </form>
            </div>
        </div>
    );
};

export default AddJobs;