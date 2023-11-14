import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';
import auth from '../Config/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// create autcontext 
export const AuthContext = createContext();
// create a google provider 
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    // declare a state for storing user info 
    const [user, setUser] = useState('');
    // declare state for storing loading state 
    const [isLoading, setIsLoading] = useState(true);

    // create user with email and password
    const createUser = (email, password)=>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // sign in with email and password 
    const login = (email, password) =>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in with google 
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    // sign out 
    const logOut = () =>{
        return signOut(auth);
    }
    // check user persistence 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setIsLoading(false);
            setUser(currentUser);
        })
        // clean up 
        return ()=>unSubscribe();
    },[]);
    const AuthInfo = {
        user, isLoading, createUser, googleSignIn,
        login, logOut,
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