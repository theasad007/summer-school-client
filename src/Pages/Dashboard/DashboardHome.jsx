
import { Helmet } from "react-helmet-async";
import useSelectedData from "../../hooks/useSelectedData";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import useClasses from "../../hooks/useClasses";


const DashboardHome = () => {
    const [selectedCourse] = useSelectedData();
    const [classes] = useClasses();
    const { user, } = useContext(AuthContext);
    const savedUsers = useLoaderData();

    const instructors = savedUsers.filter(u => u.role === 'instructor')
    const loggedUser = savedUsers.find(u => u.email === user.email)
    const isAdmin = loggedUser.role === 'admin'
    const isInstructor = loggedUser.role === 'instructor'
    return (
        <div>
            <Helmet>
                {/* <title>{isAdmin ? 'Admin'} Dashboard | Summer Laguage School</title> */}
                <title>{isAdmin ? 'Admin Dashboard | Summer Laguage School' : isInstructor ? 'Instructor Dashboard | Summer Laguage School' : 'Student Dashboard | Summer Laguage School'} Dashboard | Summer Laguage School</title>
            </Helmet>
            <div className="container">
                {
                    isAdmin ? <>
                        <div className="dashboards flex items-start gap-20">
                            <div className="other-links flex gap-10 items-center">
                                <div className="p-10 transition-all text-center bg-emerald-200 hover:bg-emerald-300 rounded-md text-lg font-semibold">
                                    <span className="text-5xl text-center mb-3 inline-block">{savedUsers.length}</span>
                                    <br />
                                    All Users
                                </div>
                                <div className="p-10 transition-all text-center bg-rose-200 hover:bg-rose-300 rounded-md text-lg font-semibold">
                                    <span className="text-5xl text-center mb-3 inline-block">{instructors.length}</span>
                                    <br />
                                    All Instrutors
                                </div>
                            </div>
                        </div>
                    </>
                        : isInstructor ? <>
                            <div className="dashboards flex items-start gap-20">
                                <div className="other-links flex gap-10 items-center">
                                    <div className="p-10 transition-all text-center bg-emerald-200 hover:bg-emerald-300 rounded-md text-lg font-semibold">
                                        <span className="text-5xl text-center mb-3 inline-block">{classes.length}</span>
                                        <br />
                                        All Classes
                                    </div>
                                    <div className="p-10 transition-all text-center bg-rose-200 hover:bg-rose-300 rounded-md text-lg font-semibold">
                                        <span className="text-5xl text-center mb-3 inline-block">{instructors.length}</span>
                                        <br />
                                        All Instrutors
                                    </div>
                                </div>
                            </div>
                        </>
                            :
                            <>
                                <div className="dashboards flex items-start gap-20">
                                    <div className="other-links flex gap-10 items-center">
                                        <div className="p-10 transition-all text-center bg-emerald-200 hover:bg-emerald-300 rounded-md text-lg font-semibold">
                                            <span className="text-5xl text-center mb-3 inline-block">{selectedCourse.length}</span>
                                            <br />
                                            Selected Class
                                        </div>
                                        <div className="p-10 transition-all text-center bg-rose-200 hover:bg-rose-300 rounded-md text-lg font-semibold">
                                            <span className="text-5xl text-center mb-3 inline-block">0</span>
                                            <br />
                                            Enrolled Class
                                        </div>
                                    </div>
                                </div>
                            </>
                }

            </div>
        </div>
    );
};

export default DashboardHome;