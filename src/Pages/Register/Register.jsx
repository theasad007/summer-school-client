// import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import GoogleLogin from '../Shared/SocialLogin/GoogleLogin';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import BreadCumb from '../Shared/BreadCumb/BreadCumb';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
const Register = () => {
    const [showHide, setShowHide] = useState(false);
    const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                updateNamePhoto(loggedUser, data.name, data.photo)
                const saveUser = {photoURL: data.photo, name: data.name, email: data.email}
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId) {
                        toast.success('Account Created Successfully', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        reset();
                        navigate('/');
                    }
                })
                
            })
    };
    const updateNamePhoto = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => { })
            .catch(error => console.log(error))
    }


    return (<>
        <Helmet>
            <title>Register | Summer Laguage School</title>
        </Helmet>
        <BreadCumb title={'Register'}></BreadCumb>

        <div className="register-page py-20">
            <div className="container">
                <div className="registration-wrap">
                    <div className="border bg-neutral-50 p-10 w-full md:w-6/12 mx-auto rounded-lg">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text text-base">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Your Name" className="input border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:outline-0" />
                                {errors.name && <span className='text-rose-600 text-sm mt-2'>Name is required</span>}
                            </div>

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
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/

                                })} name='password' id='password' placeholder="Password" className="input border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:outline-0" />
                                <span onClick={() => setShowHide(!showHide)} className='cursor-pointer inline-block w-4 absolute right-3 top-14'>{showHide ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} </span>

                                {errors.password?.type === 'required' && <span className='text-rose-600 text-sm mt-2'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-rose-600 text-sm mt-2'>Should be more than 6 Charachters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-rose-600 text-sm mt-2'>Must have 1 uppercase letter, 1 special charachter</span>}
                            </div>

                            <div className="form-control mb-3 relative">
                                <label className="label">
                                    <span className="label-text text-base">Confirm Password</span>
                                </label>
                                <input type={showHide ? 'text' : 'password'} {...register("confirmPassword", {
                                    required: true,
                                    validate: (match) => {
                                        const password = getValues("password");
                                        return match === password || "Passwords Does't match!";
                                    },
                                })} name='confirmPassword' id="confirmPassword" placeholder="Password" className="input border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:outline-0" />
                                {errors.confirmPassword?.type === 'required' && <span className='text-rose-600 text-sm mt-2'>Confirm Password is required</span>}
                                <span className='text-rose-600 text-sm mt-2'>{errors.confirmPassword?.message}</span>
                            </div>

                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text text-base">Photo URL</span>
                                </label>
                                <input type="url" {...register("photo", { required: true })} name='photo' placeholder="Photo URL" className="input border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:outline-0" />
                                {errors.photo && <span className='text-rose-600 text-sm mt-2'>Photo URL is required</span>}
                            </div>

                            <div className="form-control mb-3 mt-8">
                                <button className="btn text-base text-white w-full bg-rose-500 hover:bg-rose-600 rounded-full">Register</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <GoogleLogin></GoogleLogin>
                        <div className="text-center mt-5">
                            <p>Already Have an Account? Plesae <Link to='/login' className='text-emerald-500'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Register;