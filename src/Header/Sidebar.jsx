import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const Sidebar = () => {
    const {user, logOut, loginUser} = useAuth();
    // declare a state to store user image 
    const [navImage, setNavImage] = useState("https://blush.design/api/download?shareUri=io9vDIdwZEjiNCae&c=Hair_0%7Ed5e1d5-0.2%7Eff0048_Rainbow_0%7E008bf7-0.2%7E7ffc51_Skin_0%7Eb02d1c-0.2%7Efeb1cd&w=800&h=800&fm=png");

    if(!(user?.photoURL) || !(loginUser?.imageUrl)){
        const imageUrl = (user?.photoURL) || (loginUser?.imageUrl);
        const img = new Image();
      
        img.onload = () => {
          // Image loaded successfully
          setNavImage(imageUrl);
        };
      
        img.onerror = () => {
          // Image failed to load
          setNavImage('https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg');
        };
        img.src = imageUrl;
    }
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
        <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-60 min-h-full bg-base-200">
            {/* Sidebar content here */}
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
                        (user?.photoURL || loginUser?.imageUrl) && <img src={navImage}
                         className="w-10 h-10 rounded-full" title={(user?.displayName) || (loginUser?.name)} alt="" />
                    }
                    </>
                    :<NavLink to='/login' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600" : ""}>
                    <span className={navStyle}>Login</span></NavLink>
                }
        </ul>
        </div>
    );
};

export default Sidebar;