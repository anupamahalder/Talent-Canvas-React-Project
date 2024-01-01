import JobTabs from "../../Components/JobTabs";

const Home = () => {
    return (
        <div className="">
            {/* banner section  */}
            <div className="relative">
                <img className="h-[450px] md:h-[650px] w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner-image" />
                {/* banner content section  */}
                <div className="absolute flex justify-center items-center top-0 h-full w-full bg-gradient-to-r from-[#0d0d0d59] via-[#080808bd] to-[#0d0d0d59]">
                    <div className="mx-auto justify-center">
                        {/* heading  */}
                        <h1 className="mx-auto text-center text-white w-full text-4xl md:text-6xl font-bold">Where Your Talents Shine Bright</h1>
                        <h1 className="text-center md:font-semibold text-gray-200 w-4/5 mx-auto my-6 md:text-xl">Your Gateway to Limitless Opportunities with Talent Canvas. Painting the Future of Your Career...</h1>
                        {/* search  */}
                        <div className="flex gap-2 mx-auto justify-center items-center">
                            <input className="py-3 px-1 md:px-2 rounded-md "
                            type="text" placeholder="Search your jobs..."/>
                            <button className="btn bg-[#e64f34] text-white hover:bg-[#b64632]">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* job tab section  */}
            <div>
                <h1 className="mt-10 mb-6 text-[#FF6348] text-center text-3xl font-bold">Find Your Jobs</h1>
                <JobTabs></JobTabs>
            </div>
            {/* gallery section  */}
            
        </div>
    );
};

export default Home;