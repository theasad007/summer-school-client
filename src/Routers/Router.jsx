import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import MyEnrolledClass from "../Pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import AllUSers from "../Pages/Dashboard/AllUsers/AllUSers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/users'),
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/dashboard/selectedcourse',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: '/dashboard/payment',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/enrolledcourse',
                element: <MyEnrolledClass></MyEnrolledClass>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUSers></AllUSers>
            },
            {
                path: '/dashboard/manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: '/dashboard/addClass',
                element: <AddClass></AddClass>
            },
            {
                path: '/dashboard/myClasses',
                element: <MyClasses></MyClasses>
            },
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }

])

export default router;