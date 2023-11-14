
const Login = () => {
    const inputStyle = "w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-800 shadow-md border-t-transparent text-blue-gray-700 outline outline-0  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-800 focus:border-2 focus:border-[#f3591d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-800";

    const labelStyle = "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-800 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-800 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f3591d] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f17c4d] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f17c4d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-800";
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-lg w-96 rounded-xl bg-clip-border">
                <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-[#f3591d] to-[#ffbca2] bg-clip-border shadow-[#FEA47F]/40">
                <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                    Sign In
                </h3>
                </div>
                <div className="flex flex-col gap-4 p-6">
                <div className="relative h-11 w-full mb-4 min-w-[200px]">
                    <input
                    className= {inputStyle}
                    placeholder=""
                    />
                    <label className={labelStyle}>
                    Email
                    </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                    className={inputStyle}
                    placeholder=" "
                    />
                    <label className={labelStyle}>
                    Password
                    </label>
                </div>
                
                </div>
                <div className="p-6 pt-0 mt-6">
                <button
                    className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#d54107] to-[#f89f7c] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#f3591d]/20 transition-all hover:shadow-lg hover:shadow-[#f3591d]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    Login
                </button>
                <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                    Donot have an account?
                    <a
                    href="#signup"
                    className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-900"
                    >
                    Register
                    </a>
                </p>
                </div>
                </div>
        </div>
    );
};

export default Login;