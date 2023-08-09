import { Link } from "react-router-dom";
import InstructorCard from "../../Shared/InstructorCard/InstructorCard";
import { useEffect, useState } from "react";


const PopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users/instructors/home')
        .then(res => res.json())
        .then(data => {
            setPopularInstructors(data)
        })
    }, [])
    return (
        <div className="container">
            <div className="classes-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    popularInstructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                }
            </div>
            <div className="all-btn text-center mt-10">
                <Link to='/instructors'><button className="btn text-base font-bold h-auto py-4 px-10 bg-rose-500 hover:bg-rose-600 text-white">All Instructors</button></Link>
            </div>
        </div>
    );
};

export default PopularInstructors;