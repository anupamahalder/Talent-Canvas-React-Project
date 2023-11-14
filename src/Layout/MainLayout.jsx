import PropTypes from 'prop-types';
import Navbar from '../Header/Navbar';
import Sidebar from '../Header/Sidebar';
const MainLayout = ({children}) => {
    return (
        <div className="drawer mx-auto max-w-[1300px]">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <Navbar></Navbar>
                {/* Page content here */}
                {children}
            </div> 
            <Sidebar></Sidebar>
        </div>
    );
};
// Adding proptypes 
MainLayout.propTypes ={
    children: PropTypes.node,
}
export default MainLayout;