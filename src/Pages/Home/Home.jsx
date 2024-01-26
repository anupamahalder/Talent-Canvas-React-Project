import { useState } from "react";
import JobTabs from "../../Components/JobTabs";
import AboutUs from "./AboutUs";
import './home.css';
import ContactUs from "../../Components/ContactUs";

const Home = () => {
    // declare a state for index
    const [index, setIndex] = useState(0);


    // handle search button 
    const hanldeSearch=(e)=>{
        const allJobs = "All Jobs";
        const fullTimeJobs = "Full Time Jobs fulltime";
        const partTimeJobs = "Part Time Jobs parttime";
        const onSiteJobs = "On Site Jobs onsite";
        const hybridJobs = "Hybrid Jobs";
        const remoteJobs = "Remote Jobs";
        const internJobs = "Intern Jobs";
        e.preventDefault();
        const search = e.target.search.value;
        if(search === ""){
            // console.log('bye');
            return;
        }
        if(allJobs.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            setIndex(0);
        }
        else if(fullTimeJobs.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            setIndex(1);
        }
        else if(partTimeJobs.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            setIndex(2);
        }
        else if(onSiteJobs.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            setIndex(3);
        }
        else if(hybridJobs.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            setIndex(4);
        }
        else if(remoteJobs.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            setIndex(5);
        }
        else if(internJobs.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            setIndex(6);
        }
        else{
            setIndex(0);
        }
        // console.log(search);
    }
    return (
        <div className="min-h-screen">
            {/* banner section  */}
            <div className="relative">
                <img className="h-[450px] md:h-[650px] w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner-image" />
                {/* banner content section  */}
                <div className="absolute flex justify-center items-center top-0 h-full w-full bg-gradient-to-r from-[#0d0d0d59] via-[#080808bd] to-[#0d0d0d59]">
                    <div className="mx-auto justify-center">
                        {/* heading  */}
                        <h1 id="typing-heading" data-text="Where Your Talents Shine Bright...">Where Your Talents Shine Bright...</h1>
                        <h1 className="text-center md:font-semibold text-gray-200 w-4/5 mx-auto my-6 md:text-xl">Your Gateway to Limitless Opportunities with Talent Canvas. Painting the Future of Your Career</h1>
                        {/* search  */}
                        <div className="flex gap-2 mx-auto justify-center items-center">
                            <form onSubmit={hanldeSearch}>
                                <input className="py-3 px-1 md:px-2 mr-2 rounded-md "
                                type="text" name="search" placeholder="Search your job category..."/>
                                <button className="btn bg-[#e64f34] text-white hover:bg-[#b64632]">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* job tab section  */}
            <div className="mb-10">
                <h1 className="mt-10 mb-6 text-[#FF6348] text-center text-3xl font-bold">Find Your Jobs</h1>
                <JobTabs index={index}></JobTabs>
            </div>
            {/* about us section  */}
            <AboutUs/>
            {/* Contact us section  */}
            <ContactUs/>
        </div>
    );
};

export default Home;