import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";


const AddClass = () => {

    const {user} = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const classData = {...data, status: 'pending'}
        console.log('then', classData)
        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                toast.success('Class Added Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                reset();
            }
        })
    };
    return (
        <div>
            <Helmet>
                <title>Add Class | Summer Laguage School</title>
            </Helmet>
            <div className="title mb-5">
                <h3 className="text-2xl font-bold">Add Class</h3>
            </div>
            <div className="add-class">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text text-base">Class name</span>
                        </label>
                        <input type="text" {...register("classesName", { required: true })} name='classesName' placeholder="Class name" className="input border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:outline-0" />
                        {errors.className && <span className='text-rose-600 text-sm mt-2'>Class Name is required</span>}
                    </div>

                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text text-base">Class Image</span>
                        </label>
                        <input type="url" {...register("image", { required: true })} name='image' placeholder="Image URL" className="input border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:outline-0" />
                        {errors.image && <span className='text-rose-600 text-sm mt-2'>Image URL is required</span>}
                    </div>

                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text text-base">Instructor name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name='name' placeholder="Instructor name" className="input border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:outline-0" defaultValue={user?.displayName} readOnly/>
                        {errors.name && <span className='text-rose-600 text-sm mt-2'>Instructor Name is required</span>}
                    </div>

                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text text-base">Instructor Email</span>
                        </label>
                        <input type="text" {...register("email", { required: true })} name='email' placeholder="Your Email" className="input border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:outline-0" defaultValue={user?.email} readOnly/>
                        {errors.email && <span className='text-rose-600 text-sm mt-2'>Instructor Email is required</span>}
                    </div>

                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text text-base">Available Seats</span>
                        </label>
                        <input type="number" {...register("availableSeats", { required: true })} name='availableSeats' placeholder="Available Seats" className="input border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:outline-0" min={0}/>
                        {errors.availableSeats && <span className='text-rose-600 text-sm mt-2'>Instructor Email is required</span>}
                    </div>

                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text text-base">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} name='price' placeholder="Price" className="input border-neutral-300 hover:border-neutral-400 focus:border-neutral-500 focus:outline-0" min={0}/>
                        {errors.price && <span className='text-rose-600 text-sm mt-2'>Instructor Email is required</span>}
                    </div>

                    <div className="form-control mb-3 mt-8">
                        <button className="btn text-base text-white w-full bg-rose-500 hover:bg-rose-600 rounded-full">Add Class</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;