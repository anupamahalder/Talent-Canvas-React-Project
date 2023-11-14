import { useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';
// create autcontext 
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    // declare a state for storing user info 
    const [user, setUser] = useState(null);

    const AuthInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};
// Adding proptypes 
AuthProvider.propTypes ={
    children: PropTypes.node.isRequired,
}
export default AuthProvider;