import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import loadGIF from '../assets/Other/loading.gif'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <>
            <div className="container text-center py-12">
                <img src={loadGIF} alt="" className="w-10 mx-auto" />
                <p className="mt-4 font-bold text-xl">Loading...</p>
            </div>
        </>
    }
    
    if(user?.email){
        return children
    }
    
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;