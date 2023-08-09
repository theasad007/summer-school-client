import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import ToggleThemes from "../../ToggleTheme/ToggleTheme";
import { FaBars, FaBook, FaHome, FaMoneyBill, FaPlusSquare, FaUser } from "react-icons/fa";
import logoWhite from '../../assets/Header/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {
    const { user,} = useContext(AuthContext);
    const savedUsers = useLoaderData();

    const loggedUser = savedUsers.find(u => u.email === user.email)
    const isAdmin = loggedUser.role === 'admin'
    const isInstructor = loggedUser.role === 'instructor'

    // const [isAdmin] = useAdmin;
    // console.log(isAdmin)
    // const isInstructor = false


    return (
        <div>
            <div className="dashboard-area py-20">
                <div className="container">
                    <div className="drawer lg:drawer-open gap-10">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col ">
                            <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden"><FaBars></FaBars></label>
                            <Outlet></Outlet>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                                <li>
                                    <Link to='/'>
                                        <img src={logoWhite} alt="" className="w-48" />
                                    </Link>
                                </li>
                                <div className="divider my-3"></div>

                                {
                                    isAdmin ? <>
                                        <li>
                                            <NavLink to='/dashboard' className="text-base active"> <FaHome className="text-lg"></FaHome> Admin Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dashboard/manageClasses' className="text-base"><FaBook className="text-lg"></FaBook> Manage Classes</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dashboard/allusers' className="text-base"><FaUser className="text-lg"></FaUser> Manage Users</NavLink>
                                        </li>
                                    </>
                                        : isInstructor ? <>
                                            <li>
                                                <NavLink to='/dashboard' className="text-base active"> <FaHome className="text-lg"></FaHome> Instructor Home</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/dashboard/addClass' className="text-base"><FaPlusSquare className="text-lg"></FaPlusSquare> Add A Class</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/dashboard/myClasses' className="text-base"><FaBook className="text-lg"></FaBook> My Classes</NavLink>
                                            </li>
                                        </>
                                            :
                                            <>
                                                <li>
                                                    <NavLink to='/dashboard' className="text-base active"> <FaHome className="text-lg"></FaHome> Student Home</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/dashboard/selectedcourse' className="text-base"><FaBook className="text-lg"></FaBook> My Selected Classes</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/dashboard/enrolledcourse' className="text-base"><FaMoneyBill className="text-lg"></FaMoneyBill> My Enrolled Classes</NavLink>
                                                </li>
                                            </>

                                }

                                <div className="divider my-1"></div>

                                <li>
                                    <NavLink to='/' className="text-base"> <FaHome className="text-lg"></FaHome> Main Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/classes' className="text-base"> <FaBook className="text-lg"></FaBook> All Classes</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/instructors' className="text-base"> <FaUser className="text-lg"></FaUser> All Instuctors</NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            {
                <button className="fixed top-1 right-1 md:top-10 md:right-10 ">
                    {
                        ToggleThemes()
                    }
                </button>
            }
        </div>
    );
};

export default Dashboard;