import { Helmet } from "react-helmet-async";
import useClasses from "../../../hooks/useClasses";


const ManageClasses = () => {
    const [classes] = useClasses();

    return (
        <div>
            <Helmet>
                <title>Manage Class | Summer Laguage School</title>
            </Helmet>
            <div className="title mb-5">
                <h3 className="text-2xl font-bold">All Classes: {classes.length}</h3>
            </div>
            <div className="classes">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Info</th>
                                <th>Seats & Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((cl) =>
                                    <tr key={cl._id}>
                                        <td>
                                            <img src={cl.image} alt="" className="w-40" />
                                        </td>
                                        <td>
                                            <p className={`${cl.status === 'pending' ? 'bg-amber-500 py-1 px-2 mb-2 rounded-md' : ''} inline-block`}>{cl.status}</p>
                                            <h2 className="text-base font-bold">{cl.name}</h2>
                                            <p className="text-base">Instructor: {cl.instructor}</p>
                                            <p>Email: {cl.email}</p>
                                        </td>
                                        <td>
                                            <p>Seats: {cl.availableSeats}</p>
                                            <p>Price: {cl.price}</p>
                                        </td>
                                        <td>
                                            <div className="btn-wrap flex flex-col gap-2">
                                                <button className="btn bg-emerald-300">Approve</button>
                                                <button className="btn bg-rose-300">Deny</button>
                                                <button className="btn bg-neutral-300">Feedback</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageClasses;