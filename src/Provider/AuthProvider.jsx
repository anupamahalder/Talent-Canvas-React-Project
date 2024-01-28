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
    // declare a state to store login user while logged in with email and password 
    const [loginUser, setLoginUser] = useState(null);
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
    
    // declare a state for storing all jobs data
    const [allJob, setAllJob] = useState([]);

    // load all job data 
    useEffect(() => {
        // Fetch all jobs only once
        fetch('http://localhost:5050/alljobs')
            .then(res => res.json())
            .then(data => {
                setAllJob(data);
            })
            .catch(error => {
                console.error('Error fetching all jobs:', error);
            });
    }, [setAllJob]);

    const AuthInfo = {
        user, isLoading, createUser, googleSignIn,
        login, logOut, loginUser, setLoginUser,
        allJob, setAllJob
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