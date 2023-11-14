import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';
const PrivateRoute = ({children}) => {
    // destructure authcontext values 
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <progress className="progress w-56"></progress>;
    }
    if(!user?.email){
        return <Navigate to='/login'></Navigate>
    }
    return children;
};
// Adding proptypes
PrivateRoute.propTypes ={
    children: PropTypes.node.isRequired,
}
export default PrivateRoute;