import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="">
            <footer className="footer md:flex mx-auto p-10 bg-neutral text-neutral-content">
                <div className="flex-1">
                    <div className="flex justify-center items-center gap-2">
                        <img className="w-10" src="/darkLogo.png" alt="" />
                        <p className="text-3xl font-bold">Talent Canvas</p>
                    </div>
                    <h1 className="mt-3 text-gray-400 text-center">A Effective Job Searching Website <br />For Your Desire Career</h1>
                </div>
                <div className="flex-1 justify-center text-center">
                    <h1 className="text-xl text-gray-400 font-semibold">Visit Pages</h1>
                    <Link to='/home'>Home</Link>
                    <Link to='/alljobs'>All Jobs</Link>
                    <Link to='/myjobs'>My Jobs</Link>
                    <Link to='/appliedjobs'>Applied Jobs</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;