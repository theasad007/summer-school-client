import { useContext } from "react";
import useClasses from "../../../hooks/useClasses";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const MyClasses = () => {
    const [classes] = useClasses();
    const {user} = useContext(AuthContext);

    const myClasses = classes.filter(cl => cl.email === user.email)
    console.log(myClasses)
    return (
        <div>
            <Helmet>
                <title>My Classes | Summer Laguage School</title>
            </Helmet>
            <div className="user-table">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Seats</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClasses.map((cl, index) =>
                                    <tr key={cl._id}>
                                        <th>{index + 1}</th>
                                        <td>{cl.name}</td>
                                        <td>${cl.price}</td>
                                        <td>{cl.availableSeats}</td>
                                        <td>{cl.status}</td>
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

export default MyClasses;