import PropTypes from 'prop-types';
import Navbar from '../Header/Navbar';
import Sidebar from '../Header/Sidebar';
import Footer from '../Components/Footer';
const MainLayout = ({children}) => {
    return (
        <div className="drawer mx-auto max-w-[1400px] min-h-screen">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <Navbar/>
                {/* Page content here */}
                {children}
                <Footer />
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