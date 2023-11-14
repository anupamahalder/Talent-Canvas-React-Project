
const Navbar = () => {
    return (
        <div className="w-full navbar bg-[#FEA47F] text-[#130f40] font-bold text-2xl">
            <div className="flex-none scale-125 lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            </div> 
            <div className="flex-1 px-2 mx-2">
                <div className="flex gap-2 justify-center items-center">
                    <img className="w-[50px]" src="/logo.png" alt="" />
                    <h1 className="text-3xl">Talent Canvas</h1>
                </div>
            </div>
            <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li><a>Navbar Item 1</a></li>
                <li><a>Navbar Item 2</a></li>
            </ul>
            </div>
        </div>
    );
};

export default Navbar;