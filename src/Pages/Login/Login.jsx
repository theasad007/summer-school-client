import { Helmet } from "react-helmet-async";
import BreadCumb from "../Shared/BreadCumb/BreadCumb";
import { useForm } from 'react-hook-form';
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import GoogleLogin from "../Shared/SocialLogin/GoogleLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const [showHide, setShowHide] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {emailLogin} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const onSubmit = data => {
        emailLogin(data.email, data.password)
            .then(() => {
                // navigate(from, {replace: true})
                toast.success('Login Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => {
                console.log(error)
            })
            navigate(from, {replace: true})
    };
    return (
        <>
            <Helmet>
                <title>Login | Summer Laguage School</title>
            </Helmet>
            <BreadCumb title={'Login'}></BreadCumb>
            <div className="register-page py-20">
                <div className="container">
                    <div className="registration-wrap">
                        <div className="border bg-neutral-50 p-10 w-full md:w-6/12 mx-auto rounded-lg">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text text-base">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} name='email' placeholder="Your Email" className="input border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:outline-0" />
                                    {errors.email && <span className='text-rose-600 text-sm mt-2'>Email is required</span>}
                                </div>

                                <div className="form-control mb-3 relative">
                                    <label className="label">
                                        <span className="label-text text-base">Password</span>
                                    </label>
                                    <input type={showHide ? 'text' : 'password'} {...register("password", {
                                        required: true,

                                    })} name='password' id='password' placeholder="Password" className="input border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:outline-0" />
                                    <span onClick={() => setShowHide(!showHide)} className='cursor-pointer inline-block w-4 absolute right-3 top-14'>{showHide ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} </span>

                                    {errors.password?.type === 'required' && <span className='text-rose-600 text-sm mt-2'>Password is required</span>}
                                </div>

                                <div className="form-control mb-3 mt-8">
                                    <button className="btn text-base text-white w-full bg-rose-500 hover:bg-rose-600 rounded-full">Login</button>
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <GoogleLogin></GoogleLogin>
                            <div className="text-center mt-5">
                                <p>Do Not Have an Account? Plesae <Link to='/register' className='text-emerald-500'>Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;