

const BreadCumb = ({ title }) => {
    return (
        <div className="bg-slate-200 dark:bg-slate-700 dark:text-neutral-200 py-10">
            <div className="container">
                <div className="info text-center">
                    <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default BreadCumb;