

const InstructorCard = ({instructor}) => {
    const { name, photoURL, email} = instructor;
    return (
        <div className="cards border rounded-md">
            <img src={photoURL} alt="" className="w-full rounded-t-md" />
            <div className="info bg-slate-200 p-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-2">{name}</h2>
            <p className="text-sm md:text-base">Email: {email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;