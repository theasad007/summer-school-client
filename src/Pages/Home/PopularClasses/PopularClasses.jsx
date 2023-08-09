import { Link } from "react-router-dom";
import ClassCard from "../../Shared/ClassCard/ClassCard";
import { useEffect, useState } from "react";


const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes/home')
        .then(res => res.json())
        .then(data => {
            setPopularClasses(data)
        })
    }, [])
    return (
        <div className="container">
            <div className="classes-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    popularClasses.map(lesson => <ClassCard key={lesson._id} lesson={lesson}></ClassCard>)
                }
            </div>
            <div className="all-btn text-center mt-10">
                <Link to='/classes'><button className="btn text-base font-bold h-auto py-4 px-10 bg-rose-500 hover:bg-rose-600 text-white">All Classes</button></Link>
            </div>
        </div>
    );
};

export default PopularClasses;