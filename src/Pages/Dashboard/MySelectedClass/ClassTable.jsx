import { Link } from "react-router-dom";


const ClassTable = ({ course, handleDelete }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center space-x-6">
                                <div className="avatar">
                                    <div className="w-20 h-20">
                                        <img src={course.image} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xl mb-2 font-bold">{course.className}</div>
                                    <div className="text-base text-emerald-500 font-bold">Price: ${course.price}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="flex flex-col justify-start">
                                <h3 className="text-lg">{course.instructor}</h3>
                                <p className="text-emerald-500 text-base">Seats Available: {course.available_seats}</p>
                            </div>
                        </td>
                        <th>
                            <div className="actions flex gap-5 justify-end">
                                <button onClick={() => handleDelete(course._id)} className="btn bg-rose-400 text-white hover:bg-rose-500">Delete</button>
                                <Link to='/dashboard/payment'>
                                    <button className="btn bg-emerald-400 text-white hover:bg-emerald-500">Pay Now</button>
                                </Link>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ClassTable;