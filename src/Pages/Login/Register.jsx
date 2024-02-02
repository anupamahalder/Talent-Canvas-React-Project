import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import {BsEyeSlashFill} from 'react-icons/bs';
import {IoEyeSharp} from 'react-icons/io5';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet";

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // destructure authContext 
    const {createUser, setLoginUser, loginUser} = useAuth();
    // declare a state to track the visibility of password 
    const [isVisible, setIsVisible] = useState(false);

    // declare a state to store image or user 
    const [imageUrl, setImageUrl] = useState('https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg');
    
     // handle image url is valid or not 
     const handleImageUrl = (e) => {
        const imageUrl = e.target.value;
        const img = new Image();
      
        img.onload = () => {
          // Image loaded successfully
          console.log('Image is valid:', imageUrl);
          setImageUrl(imageUrl);
        };
      
        img.onerror = () => {
          // Image failed to load
          console.error('Invalid image URL:', imageUrl);
          setImageUrl('https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg');
        };
        img.src = imageUrl;
      };
    // create function to handle login with email and password 
    const handleRegister = e =>{
        e.preventDefault();
        const name= e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const userData ={name,imageUrl,email};
        createUser(email,password)
        .then(result =>{
            // post user data to database 
            axios.post('https://talent-canvas-server-side.vercel.app/users-data', userData)
            .then(data => {
                console.log(data.data);
                // url to load data from server 
                const url = `https://talent-canvas-server-side.vercel.app/users?email=${email}`;
                axios.get(url)
                .then(data =>{
                    console.log(data.data[0]);
                    const userInfo = data.data[0];
                    // set user 
                    setLoginUser(userInfo);
                    console.log('register user',loginUser);
                })
            })
            .catch(err => console.log(err.message));
            console.log(result.user);
            Swal.fire({
                title: 'Good Job',
                text: 'You have successfully Registered',
                icon: 'success'
            })
            navigate(location?.state ? location?.state : '/');
        })
        .catch(err=>{
            console.log(err.message);
            Swal.fire({
                title: 'Sorry',
                text: err.message,
                icon: 'error'
            })
        })

        console.log(email,password);
    }
    
    const inputStyle = "w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-800 shadow-md border-t-transparent text-blue-gray-700 outline outline-0  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-800 focus:border-2 focus:border-[#f3591d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-800";

    const labelStyle = "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-800 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-800 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f3591d] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f17c4d] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f17c4d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-800";
    return (
        <div className="md:flex justify-center items-center mx-auto min-h-screen md:py-20 lg:px-10">
            <Helmet>
                <title>Talent Canvas | Register</title>
            </Helmet>
            <div className="-mb-2 flex justify-center mx-auto w-1/2">
                <img src="https://blush.design/api/download?shareUri=mTIi5LmGVpQgxMCs&c=Hair_0%7E860a0c_Rainbow_0%7E008bf7_Skin_0%7Eef9e89&w=800&h=800&fm=png" alt="register image" />
            </div>
            <div className="relative m-4 lg:mr-10 mx-auto flex flex-col text-gray-700 bg-white shadow-lg w-80 md:w-96 rounded-xl bg-clip-border">
                <div className="relative grid mx-4 md:mb-4 -mt-6 overflow-hidden text-white shadow-lg h-20 md:h-28 place-items-center rounded-xl bg-gradient-to-tr from-[#f3591d] to-[#ffbca2] bg-clip-border shadow-[#FEA47F]/40">
                <h3 className="block font-sans text-2xl md:text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                    Register Now
                </h3>
                </div>
                <form onSubmit={handleRegister}>
                    <div className="flex flex-col gap-2 md:gap-4 px-6 py-2 md:py-6">
                    <div className="relative md:h-11 w-full md:mb-4 min-w-[200px]">
                        <input
                        className= {inputStyle}
                        placeholder="" name="name" type="text" required
                        />
                        <label className={labelStyle}>
                        Name
                        </label>
                    </div>
                    <div className="relative md:h-11 w-full min-w-[200px]">
                        <input onBlur={handleImageUrl}
                        className= {inputStyle}
                        placeholder="" name="image" type="text" 
                        />
                        <label className={labelStyle}>
                        Image URL
                        </label>
                    </div>
                    <div className="relative md:h-11 w-full min-w-[200px]">
                        <input
                        className= {inputStyle}
                        placeholder="" name="email" type="email" required
                        />
                        <label className={labelStyle}>
                        Email
                        </label>
                    </div>
                    <div className="relative md:h-11 w-full min-w-[200px]">
                        <input
                        className={inputStyle}
                        placeholder=" " name="password" 
                        type={ isVisible ? 'text': 'password'} required
                        />
                        <label className={labelStyle}>
                        Password
                        </label>
                        {/* put the icons to check visible password  */}
                        <div onClick={()=>setIsVisible(!isVisible)} 
                        className="absolute right-4 top-4">
                        {
                            // make the type dynamic
                            isVisible ? <IoEyeSharp></IoEyeSharp> : <BsEyeSlashFill></BsEyeSlashFill>
                        }
                        </div>
                    </div>
                    
                    </div>
                    <div className="px-6 md:py-6 md:pt-4 mt-4">
                    <button
                        className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#00A378] to-[#01674c] py-2 md:py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#01674c]/20 transition-all hover:shadow-lg hover:shadow-[#01674c]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="submit"
                        data-ripple-light="true"
                    >
                        <span className="py-2 text-base md:text-lg">Register</span>
                    </button>
                <p className="flex justify-center mb-3 mt-2 md:mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                    Already have an account?
                    <Link className="text-red-800 font-semibold ml-1" to='/login'>Login</Link>
                </p>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Register;