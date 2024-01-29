import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

const MyJobUpdate = () => {
  const navigate = useNavigate();
    const id = useParams();
    // declare a state for storing the job data for update 
    const [updateJob, setUpdateJob] = useState([]);
  
    // load job data 
    useEffect(()=>{
      fetch(`http://localhost:5050/job-detail/${id?.id}`)
      .then(res=>res.json())
      .then(data=>{
        setUpdateJob(data);
      })
    },[]);
    // destructure updateJob 
    const {_id,jobBannerImageUrl,jobTitle,loggedInUserName,jobCategory,category_key,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber} = updateJob;
    // declare a state to store the category 
    const [selectedCategory, setSelectedCategory] = useState(category_key || '');
    
    // Remove "$" and split the string by "-"
    const parseSalary = (salary) => {
      if (!salary) {
        return { firstNumber: null, secondNumber: null };
      }
      // Remove non-numeric characters except for digits, commas, and hyphens
      const cleanedSalary = salary.replace(/[^\d,^-]/g, "");

      // Split the cleaned salary string by hyphen
      const salaryParts = cleanedSalary.split("-");
      
      // Parse the first and second numbers
      const firstNumber = parseInt(salaryParts[0].replace(/,/g, ""), 10) || null;
      const secondNumber = parseInt(salaryParts[1]?.replace(/,/g, ""), 10) || null;
    
      return { firstNumber, secondNumber };
    };
    const lowestSalary = (parseSalary(salaryRange).firstNumber);
    const highestSalary = (parseSalary(salaryRange).secondNumber);
    // destructure authcontext values 
    const {user, loginUser, setAllJob, allJob} = useAuth();

    const formRef = useRef();

    // handle image url is valid or not 
    const handleImageUrl = (e) => {
        const imageUrl = e.target.value;
        const img = new Image();
      
        img.onload = () => {
          // Image loaded successfully
        //   console.log('Image is valid:', imageUrl);
        };
      
        img.onerror = () => {
          // Image failed to load
        //   console.error('Invalid image URL:', imageUrl);
          Swal.fire({
            title: "Invalid Image URL",
            text: "Please provide valid image url",
            icon: "error"
          });
        };
      
        img.src = imageUrl;
      };
      const categoryIndex = [{"fulltime":"Full Time"},{"parttime":"Part Time"},{"onsite":"On Site"},{"hybrid":"Hybrid"},{"remote":"Remote"}, {"intern":"Intern"}];

    // handle add jobs 
    const hanldeAddJob = (e) =>{
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.jobTitle.value;
        const jobBannerImageUrl = form.bannerUrl.value;
        const category_key = selectedCategory;
        const selectedCategoryObject = categoryIndex.find(categoryObj =>
          Object.keys(categoryObj)[0] === selectedCategory
        );
        // Get the category value
        const jobCategory = selectedCategoryObject ? selectedCategoryObject[selectedCategory] : 'fulltime';
        const highestSalary = form.highestSalary.value;
        const lowestSalary = form.lowestSalary.value;
        const jobDescription = form.jobDescription.value;
        const applicationDeadline = form.applicationDeadline.value;
        const salaryRange = `$${lowestSalary}-$${highestSalary}`;
        // make an object to post data to the server 
        const jobDetails = {jobTitle,jobBannerImageUrl,jobCategory,category_key,salaryRange,jobDescription,applicationDeadline};
        fetch(`http://localhost:5050/update-job/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobDetails)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                fetch(`http://localhost:5050/job-detail/${_id}`)
                .then(res=>res.json())
                .then(data =>{
                  const updateJobData = allJob.filter(item=>item.id != _id);
                  setAllJob([...updateJobData,data]);
                })
                Swal.fire({
                    title: 'Updated Sucessful!',
                    text: "Job Updated Successfully to Database",
                    icon: 'success',
                })
                form.reset();
                navigate(-1);
            }
        })
    }
    
    return (
        <div className='min-h-screen py-20 px-10 flex justify-center mb-20'>
                <div className='bg-[#fbebe6] text-[#555555] w-[550px] p-4 shadow-2xl rounded-lg text-xl'>
                <h1 className="mx-auto text-center font-bold uppercase text-3xl text-blue-800 drop-shadow-xl my-6">Update Your Job</h1>
                    <form onSubmit={hanldeAddJob} ref={formRef} >
                        {/* job title  */}
                        <span className='uppercase pl-4 font-semibold text-gray-700 mr-3'>Job Title:</span>
                        <input required className='outline pl-2 outline-1 mt-2 hover:outline-2 outline-slate-300 hover:outline-gray-800 rounded-md w-3/5' defaultValue={jobTitle} type="text" name="jobTitle" id="" /> <br /><br />
                        {/* picture url  */}
                        <span className='uppercase pl-4 font-semibold text-gray-700'>Picture URL of the Job Banner: </span>
                        <input onBlur={handleImageUrl} defaultValue={jobBannerImageUrl} required className='ml-6 pl-2 outline mt-2 outline-1 outline-slate-300 rounded-lg w-4/5 hover:outline-2 hover:outline-gray-800' type="text" name="bannerUrl" id="" /><br /><br />
                        {/* select job category  */}
                        <span className='uppercase pl-4 font-semibold text-gray-700'>Choose Job Category: </span>
                        {/* select job category  */}
                        <select
                          name="jobCategory"
                          // defaultValue={category_key}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className='bg-white py-1 w-1/3 ml-2 pl-2 outline mt-2 outline-1 outline-slate-300 rounded-lg hover:outline-2 hover:outline-gray-800'
                          id="jobCategory"
                        >
                          {categoryIndex.map((categoryObj, index) => {
                            const [categoryKey, categoryValue] = Object.entries(categoryObj)[0];
                            return (
                              <option key={index} value={categoryKey} selected={categoryKey === category_key}>
                                {categoryValue}
                              </option>
                            );
                          })}
                        </select><br /><br />

                        {/* salary range  */}
                        <span className='uppercase pl-4 font-semibold text-gray-700'>Salary Range:</span><br />
                        <input required defaultValue={lowestSalary} type="number" className='mt-2 w-40 px-2 mr-10 ml-6 outline outline-1 outline-slate-300 rounded-lg hover:outline-2 hover:outline-gray-800' name='lowestSalary' placeholder='lowest salary' />
                        <input required defaultValue={highestSalary} type="number" className='mt-2 w-40 px-2 outline outline-1 outline-slate-300 rounded-lg hover:outline-2 hover:outline-gray-800' name='highestSalary' placeholder='highest salary' /> <br /><br />
                        {/* job description  */}
                        <span className='uppercase pl-4 font-semibold text-gray-700'>Job Description:</span><br />
                        <textarea required defaultValue={jobDescription}
                        name="jobDescription" className='outline outline-1 pl-2 outline-slate-300 rounded-lg mt-2 w-5/6 mx-6 hover:outline-2 hover:outline-gray-800' id="" cols="10" rows="5"></textarea><br /><br />
                        {/* date input  */}
                        <span className='uppercase pl-4 font-semibold text-gray-700'>Application Deadline:  </span>
                        <input required defaultValue={applicationDeadline}
                         className='outline outline-1 px-2 outline-slate-300 rounded-lg hover:outline-2 hover:outline-gray-800' type="date" placeholder='select date' name="applicationDeadline" 
                         min={new Date().toISOString().split('T')[0]}
                         id="customeDate" /> <br />
                         <div className='flex justify-center my-10'>
                          {
                            // type="reset"
                            <button onClick={()=>navigate(-1)} type='button'
                             className='btn mr-2 text-xl bg-gray-500 text-white hover:bg-white hover:text-gray-800'>Go Back</button>
                          }
                         <input type="submit" className='btn text-2xl bg-[#FF6348] text-gray-700 hover:text-white hover:bg-red-700' value="Update Job" />
                         </div>
                    </form>
                </div>
        </div>
    );
};

export default MyJobUpdate;