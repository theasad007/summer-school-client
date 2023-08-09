import { Link, useNavigate } from "react-router-dom";
import logo from '../../../assets/Header/logo.png'
import './Header.css'
import ActiveLink from "../ActiveLink/ActiveLink";
import ToggleThemes from "../../../ToggleTheme/ToggleTheme";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from 'react-toastify';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user.photoURL)

    const navigate = useNavigate()
    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate('/')
            })
    }


    const menuList = <>
        <li className="mt-3 transition-all px-2 hover:text-emerald-500 border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 pb-1"><ActiveLink to='/' >Home</ActiveLink></li>
        <li className="mt-3 transition-all px-2 hover:text-emerald-500 border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 pb-1"><ActiveLink to='/instructors' >Instructors</ActiveLink></li>
        <li className="mt-3 transition-all px-2 hover:text-emerald-500 border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 pb-1"><ActiveLink to='/classes' >Classes</ActiveLink></li>
        {
            user && <li className="mt-3 transition-all px-2 hover:text-emerald-500 border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 pb-1">
            <ActiveLink to='/dashboard' >Dashboard</ActiveLink>
        </li>
        }
    </>
    return (
        <header>
            <div className="container">
                <div className="navbar bg-base-100 justify-between py-4 px-0 w-full">
                    <div className="navbar-start w-auto">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost p-0 mr-4 mb-[3] lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuList}
                            </ul>
                        </div>
                        <Link to='/'>
                            <img src={logo} alt="" />
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-center hidden xl:flex mr-12">
                            <ul className="flex gap-6 font-semibold uppercase hover:">
                                {menuList}
                            </ul>
                        </div>

                        {
                            user ?
                                <div className="dropdown dropdown-end z-50">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52">
                                        <li><a onClick={handleSignOut}>Logout</a></li>
                                    </ul>
                                </div>
                                :
                                <Link to='/login'>
                                    <button className="btn border-0 h-auto py-3 px-8 rounded-3xl text-sm text-white font-bold bg-rose-500 hover:bg-rose-600">Login</button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
            {
                <button className="fixed top-20 right-5 z-50 md:top-20 xl:top-5 xl:right-5 ">
                    {
                        ToggleThemes()
                    }
                </button>
            }
        </header>
    );
};

export default Header;