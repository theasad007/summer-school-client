
import { Helmet } from "react-helmet-async";
import useSelectedData from "../../../hooks/useSelectedData";
import ClassTable from "./ClassTable";
import Swal from "sweetalert2";


const MySelectedClass = () => {
    const [selectedCourse, refetch] = useSelectedData();
    const handleDelete = id => {
        Swal.fire({
            title: 'Do you Want to Delete?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#F43F5E',
            cancelButtonColor: '#666',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                console.log(result)
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/selected/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json'
                        },
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: 'Class Deleted Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'ok',
                                    confirmButtonColor: '#10B981',
                                })
                                refetch()
                            }
                        })
                        .catch(error => console.log(error))
                }

            })
    }
    return (
        <div>
            <Helmet>
                <title>My Selected Classes | Summer Laguage School</title>
            </Helmet>
            <div className="classes-wrap">
                <div className="title mb-5">
                    <h3 className="text-2xl font-bold">My Selected Class: {selectedCourse.length}</h3>
                </div>
                <div className="classes">
                    {
                        selectedCourse.map(course => <ClassTable key={course._id} course={course} handleDelete={handleDelete}></ClassTable>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MySelectedClass;