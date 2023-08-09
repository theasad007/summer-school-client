import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/useClasses";
import BreadCumb from "../Shared/BreadCumb/BreadCumb";
import ClassCard from "../Shared/ClassCard/ClassCard";


const Classes = () => {
    const [classes] = useClasses();
    return (
        <div>
            <Helmet>
                <title>All Classes | Summer Laguage School</title>
            </Helmet>
            <BreadCumb title={'All Classes'}></BreadCumb>
            <div className="classes-wrap py-20">
                <div className="container">
                    <div className="classes grid grid-cols-1 md:grid-cols-3 gap-8">
                        {
                            classes.map(lesson => <ClassCard key={lesson._id} lesson={lesson}></ClassCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;