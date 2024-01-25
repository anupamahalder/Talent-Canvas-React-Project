import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import {BsEyeSlashFill} from 'react-icons/bs';
import {IoEyeSharp} from 'react-icons/io5';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // destructure authContext 
    const {loginUser, setLoginUser, login, googleSignIn} = useAuth();
    // declare a state to track the visibility of password 
    const [isVisible, setIsVisible] = useState(false);

    // create function to handle login with email and password 
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email,password)
        .then(result =>{
            console.log(result.user);
            // load user data from server after login 
            const url = `http://localhost:5050/users?email=${email}`;
            axios.get(url)
            .then(data =>{
                console.log(data.data[0]);
                const userInfo = data.data[0];
                // set user 
                setLoginUser(userInfo);
                console.log('login user',loginUser);
            })
            Swal.fire({
                title: 'Good Job',
                text: 'You have successfully logged in',
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
    const handleGoogleLogin = ()=>{

        googleSignIn()
        .then(result =>{
            console.log(result.user);
            console.log(result.user?.photURL);
            Swal.fire({
                title: 'Good Job',
                text: 'You have successfully logged in',
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
    }

    const inputStyle = "w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-800 shadow-md border-t-transparent text-blue-gray-700 outline outline-0  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-800 focus:border-2 focus:border-[#f3591d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-800";

    const labelStyle = "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-800 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-800 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f3591d] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f17c4d] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f17c4d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-800";
    return (
        <div className="md:flex justify-center items-center mx-auto min-h-screen py-20 lg:px-10">
            <div className="-mb-1 flex justify-center mx-auto w-3/5 md:w-1/2">
                <img src="https://blush.design/api/download?shareUri=io9vDIdwZEjiNCae&c=Hair_0%7Ed5e1d5-0.2%7Eff0048_Rainbow_0%7E008bf7-0.2%7E7ffc51_Skin_0%7Eb02d1c-0.2%7Efeb1cd&w=800&h=800&fm=png" alt="" />
            </div>
            <div className="relative m-4 lg:mr-10 flex flex-col text-gray-700 bg-white shadow-lg w-80 md:w-96 rounded-xl bg-clip-border">
                <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-[#f3591d] to-[#ffbca2] bg-clip-border shadow-[#FEA47F]/40">
                <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                    Sign In
                </h3>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col gap-4 p-6">
                    <div className="relative h-11 w-full mb-4 min-w-[200px]">
                        <input
                        className= {inputStyle}
                        placeholder="" name="email" type="email" required
                        />
                        <label className={labelStyle}>
                        Email
                        </label>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
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
                    <div className="p-6 pt-0 mt-6">
                    <button
                        className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#d54107] to-[#f89f7c] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#f3591d]/20 transition-all hover:shadow-lg hover:shadow-[#f3591d]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="submit"
                        data-ripple-light="true"
                    >
                        <span className="py-2 text-lg">Login</span>
                    </button>
                <button onClick={handleGoogleLogin}
                    className="mt-4 block w-full select-none rounded-lg bg-gradient-to-tr from-[#081365] to-[#3e36b1] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#1e1784]/20 transition-all hover:shadow-lg hover:shadow-[#030b4a]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    <span className="py-2 text-lg">Login with Google</span>
                </button>
                <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                    Donot have an account?
                    <Link className="text-red-800 font-semibold ml-1" to='/register'>Register</Link>
                </p>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Login;