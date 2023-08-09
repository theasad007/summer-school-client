import { useContext, } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const ClassCard = ({ lesson }) => {
    const { user } = useContext(AuthContext);
    // console.log(lesson)
    const { _id, classesName, availableSeats, instructor, image, price } = lesson;
    const navigate = useNavigate();
    const location = useLocation();
    const handleSelectClass = (item) => {
        console.log(item);
        if (user && user.email) {
            const selectedItem = {courseId: _id, classesName, availableSeats, instructor, image, price, email: user.email}

            fetch('http://localhost:5000/selected', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(selectedItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('Class Selected Susseccfully', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                    
                })
        }
        else {
            Swal.fire({
                title: 'You Must Login to Select Any Course',
                className: 'styleTitle',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#10B981',
                confirmButtonText: 'Login Now',
            }).then(result => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}} )
                }
            })
        }
    }
    return (
        <div className={`cards p-5 border rounded-md ${availableSeats === 0 && 'bg-rose-300'}`}>
            <img src={image} alt="" className="w-full rounded-md mb-5" />
            <div className="card-info">
                <h2 className="text-bse md:text-xl font-bold mb-5">{classesName}</h2>
                <div className="details grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
                    <p className="border py-2 px-4 bg-neutral-100 rounded-md font-semibold text-emerald-500  text-sm">Price: ${price}</p>
                    <p className="border py-2 px-4 bg-neutral-100 rounded-md font-semibold text-emerald-500 text-sm">Seats Available: {availableSeats}</p>
                </div>

                <button onClick={() => handleSelectClass(lesson)}  className="btn w-full font-bold text-base bg-emerald-500 text-white hover:bg-emerald-600" disabled={availableSeats === 0 && true}>Select Course</button>
            </div>
        </div>
    );
};

export default ClassCard;