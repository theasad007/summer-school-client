import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)

                const saveUser = {photoURL: loggedUser.photoURL, name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            navigate(from, { replace: true })
                        }
                    })
                toast.success('Account Login Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate(from, { replace: true })
            })
            .then(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn text-base text-white w-full bg-emerald-500 hover:bg-emerald-600 rounded-full"><FaGoogle></FaGoogle> Continue With Google</button>
        </div>
    );
};

export default GoogleLogin;