import {AiOutlineAlignLeft} from 'react-icons/ai';
const Navbar = () => {
    const navs = <>
    <li><a>Sidebar Item 1</a></li>
    <li><a>Sidebar Item 2</a></li>
    </>
    return (
        <div>
            <div className="drawer m-4">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="drawer-button">
                    <AiOutlineAlignLeft></AiOutlineAlignLeft>
                </label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-52 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                {navs}
                
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Navbar;