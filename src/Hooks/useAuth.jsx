import { useContext } from "react";
import AuthProvider from "../Provider/AuthProvider";

const useAuth = () => {
    const authUtils = useContext(AuthProvider);
    return authUtils;
};

export default useAuth;