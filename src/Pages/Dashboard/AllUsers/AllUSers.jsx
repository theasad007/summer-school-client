import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserGraduate, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUSers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const result = await fetch('http://localhost:5000/users')
        return result.json()
    })

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    title: `${user.name} is an Admin Now!`,
                    icon: 'success',
                    confirmButtonText: 'ok',
                    confirmButtonColor: '#10B981',
                })
            }
            refetch()
        })
    }
    const handleMakeInstructor = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    title: `${user.name} is an Instructor Now!`,
                    icon: 'success',
                    confirmButtonText: 'ok',
                    confirmButtonColor: '#10B981',
                })
            }
            refetch()
        })
    }

    console.log(users)
    return (
        <div>
            <Helmet>
                <title>All Users | Summer Laguage School</title>
            </Helmet>
            <div className="users mb-10">
                <h3 className="text-2xl font-bold">Total Users: {users.length}</h3>
            </div>
            <div className="user-table">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>Role</td>
                                        <td>
                                            <div className="btn-wrap flex gap-5">
                                                <button onClick={()=> handleMakeAdmin(user)} className="btn" disabled={user?.role === 'admin' && true}><FaUserShield></FaUserShield> Make Admin</button>
                                                <button onClick={()=> handleMakeInstructor(user)} className="btn" disabled={user?.role === 'instructor' && true}><FaUserGraduate></FaUserGraduate> Make Instructor</button>
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

export default AllUSers;