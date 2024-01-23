import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
    // destructure context api 
    const {user, logOut, loginUser} = useAuth();
    // create a function to handle sign out 
    const handleSignout = () =>{
        Swal.fire({
            title: "Are you sure?",
            text: "Do You want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
          }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                .then(res =>{
                    console.log(res);
                    Swal.fire({
                        title: "",
                        text: "You have successfully logged out.",
                        icon: "success"
                    });
                })
                .catch(err =>{
                    console.log(err.message);
                    Swal.fire({
                        title: "Oopps!",
                        text: "Failed to Log Out!",
                        icon: "error"
                      });
                })
            }
          });
    }
    const navStyle = "hover:bg-[#fc9971] p-2 rounded-lg";
    return (
        <div className="w-full navbar bg-white shadow-lg text-[#130f40] font-bold">
            <div className="flex-none scale-125 lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            </div> 
            <div className="flex-1 px-2 py-2 mx-2 justify-end md:justify-start">
                <div className="flex flex-row-reverse md:flex-row gap-2 justify-center items-center">
                    <img className="w-[40px] md:w-[50px]" src="/logo.png" alt="" />
                    <h1 className="text-2xl text-[#ff6348] md:text-4xl">Talent Canvas</h1>
                </div>
            </div>
            <div className="flex-none hidden lg:block">
            <div className="flex gap-2 uppercase justify-center items-center mr-2">
                {/* Navbar menu content here */}
                <NavLink to='/' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600" : ""
                }>
                    <span className={navStyle}>Home</span></NavLink>
                <NavLink to='/alljobs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600" : ""
                }><span className={navStyle}>All Jobs</span></NavLink>
                {
                    user?.email && 
                    <>
                <NavLink to='/appliedjobs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600" : ""
                }>
                    <span className={navStyle}>Applied Jobs</span></NavLink>
                <NavLink to='/addjobs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600" : ""
                }>
                    <span className={navStyle}>Add Jobs</span></NavLink>
                <NavLink to='/myjobs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600" : ""
                }>
                    <span className={navStyle}>My Jobs</span></NavLink>

                <NavLink to='/blogs' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600" : ""
                }><span className={navStyle}>Blogs</span></NavLink>
                </>
                }
                {
                    user?.email ? 
                    <>
                    <button onClick={handleSignout}
                    className={navStyle}>SIGN OUT</button>
                    {
                        (user?.photoURL || loginUser?.imageUrl) && <img src={(user?.photoURL) || (loginUser?.imageUrl)}
                         className="w-10 h-10 rounded-full" title={(user?.displayName) || (loginUser?.name)} alt="" />
                    }
                    </>
                    :<NavLink to='/login' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600" : ""}>
                    <span className={navStyle}>Login</span></NavLink>
                }
            </div>
            </div>
        </div>
    );
};

export default Navbar;