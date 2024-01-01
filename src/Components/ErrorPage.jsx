import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="">
                <h1 className="text-[#FF6348] text-5xl text-center">404 Error <br />Page Not Found!</h1>
                <div className="flex justify-center gap-2 mx-14">
                <button onClick={()=>navigate(-1)}
                className="flex-1 bg-[#a12e1a] py-2 text-white text-2xl font-bold rounded-md mx-auto px-3 my-10">Go Back</button>
                <Link to='/'><button
                className="flex-1 bg-[#1b788f] py-2 text-white text-2xl font-bold rounded-md mx-auto px-3 my-10">Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;