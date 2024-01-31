import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="">
                <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1706718644~exp=1706719244~hmac=6325c62303bc33162ab803c8273080f581e479ede82d598dd2aa77de948f2b8e" className="w-1/2 mx-auto" alt="" />
                <div className="flex justify-around gap-2 mx-auto w-1/2">
                <div>
                <button onClick={()=>navigate(-1)}
                className="bg-red-600 w-[115px] py-2 text-white text-xl md:text-2xl font-bold rounded-md mx-auto px-3 my-10">Go Back</button>
                </div>
                <div>
                <Link to='/'><button
                className="bg-blue-600 w-[110px] py-2 text-white text-xl md:text-2xl font-bold rounded-md mx-auto px-3 my-10">Home</button></Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;