

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className='container'>
            <div className="wrap text-center pb-20">
                <p className="text-rose-600 text-base font-semibold">{subTitle}</p>
                <h2 className="inline-block text-2xl md:text-4xl font-bold uppercase">{title}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;