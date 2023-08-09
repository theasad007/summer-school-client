import { Helmet } from "react-helmet-async";


const MyEnrolledClass = () => {
    return (
        <div>
            <Helmet>
                <title>My Enrolment Classes | Summer Laguage School</title>
            </Helmet>
            <div className="container">
                <div className="">
                    No Enrolled Classes
                </div>
            </div>
        </div>
    );
};

export default MyEnrolledClass;