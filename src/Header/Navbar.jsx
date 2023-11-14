import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full navbar bg-[#FEA47F] text-[#130f40] font-bold">
            <div className="flex-none scale-125 lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            </div> 
            <div className="flex-1 px-2 py-2 mx-2">
                <div className="flex gap-2 justify-center items-center">
                    <img className="w-[50px]" src="/logo.png" alt="" />
                    <h1 className="text-4xl">Talent Canvas</h1>
                </div>
            </div>
            <div className="flex-none hidden lg:block">
            <div className="flex gap-2 uppercase">
                {/* Navbar menu content here */}
                <NavLink to='/' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-900" : ""
                }>
                    <span className="hover:bg-[#F97F51] p-2 rounded-lg">Home</span></NavLink>
                <NavLink to='/alljobs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-900" : ""
                }><span className="hover:bg-[#F97F51] p-2 rounded-lg">All Jobs</span></NavLink>
                <NavLink to='/appliedjobs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-900" : ""
                }>
                    <span className="hover:bg-[#F97F51] p-2 rounded-lg">Applied Jobs</span></NavLink>
                <NavLink to='/addjobs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-900" : ""
                }>
                    <span className="hover:bg-[#F97F51] p-2 rounded-lg">Add Jobs</span></NavLink>
                <NavLink to='/myjobs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-900" : ""
                }>
                    <span className="hover:bg-[#F97F51] p-2 rounded-lg">My Jobs</span></NavLink>
                <NavLink to='/blogs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-900" : ""
                }>
                    <span className="hover:bg-[#F97F51] p-2 rounded-lg">Blogs</span></NavLink>
                <NavLink to='/login' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-900" : ""
                }>
                    <span className="hover:bg-[#F97F51] p-2 rounded-lg">Login</span></NavLink>
            </div>
            </div>
        </div>
    );
};

export default Navbar;