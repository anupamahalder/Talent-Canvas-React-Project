import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import MyJobCard from "./MyJobCard";
import { Helmet } from "react-helmet";

const MyJobs = () => {
    // destructure auth context 
    const {user, setAllJob} = useAuth(); 
    // declare a state to store job data 
    const [myJobData, setMyJobData] = useState([]);
    // load data by passing email as query params 
    useEffect(()=>{
        axios.get(`https://talent-canvas-server-side.vercel.app/myjobs?userEmail=${user.email}`)
        .then(data=>{
            // console.log(data.data);
            setMyJobData(data.data);
        })
    },[]);
    
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Talent Canvas | My Jobs</title>
            </Helmet>
            {
                myJobData.length==0 ?
                <div className="flex justify-center items-center w-full h-full">
                    <p className="text-center md:text-2xl font-bold my-auto shadow-lg">You Have Not Added Any Jobs!</p>
                </div>
                : 
                <div>
                    <h1 className="mx-auto text-center font-bold uppercase text-2xl text-blue-800 drop-shadow-xl pt-10 pb-16">My Jobs</h1>
                    <div className="px-10 grid grid-cols-1 pb-20 md:grid-cols-2 gap-10 lg:grid-cols-3">
                    {
                        myJobData.map(job=><MyJobCard key={job._id} job={job} setMyJobData={setMyJobData} myJobData={myJobData}></MyJobCard>)
                    }
                    </div>
                </div>
            }
        </div>
    );
};

export default MyJobs;