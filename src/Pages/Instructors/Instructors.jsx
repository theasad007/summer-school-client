import { Helmet } from "react-helmet-async";
import useInstructors from "../../hooks/useInstructors";
import BreadCumb from "../Shared/BreadCumb/BreadCumb";
import InstructorCard from "../Shared/InstructorCard/InstructorCard";


const Instructors = () => {
    const [instructors] = useInstructors();

    return (
        <div>
            <Helmet>
                <title>All Instructors | Summer Laguage School</title>
            </Helmet>
            <BreadCumb title={'Instructors'}></BreadCumb>
            <div className="instrutors-wrap py-20">

                <div className="container">
                    <div className="instrutors grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;