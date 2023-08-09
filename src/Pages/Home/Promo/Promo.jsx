

const Promo = () => {
    return (
        <div className="container">
            <div className="promo-wrap grid grid-cols-1 xl:grid-cols-2 gap-20">
                <div className="promo-text">
                    <p className="text-rose-500 text-base font-bold">Start Now!</p>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-5">Learn a <br /> New Language!</h2>
                    <p>Our school is known for the high-quality education programs worldwide. We work with the best teachers who know how to engage students in the learning activities!</p>
                </div>
                <div className="promo-lists grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="promo-list flex items-center gap-5 bg-slate-200 p-7 rounded-md">
                        <h2 className="inline-block w-16 h-16 text-center bg-rose-500 text-4xl font-semibold leading-[64px] text-white rounded-full flex-shrink-0">1</h2>
                        <h3 className="text-lg font-bold dark:text-neutral-700">An Easy Study Approach</h3>
                    </div>
                    <div className="promo-list flex items-center gap-5 bg-slate-200 p-7 rounded-md">
                        <h2 className="inline-block w-16 h-16 text-center bg-rose-500 text-4xl font-semibold leading-[64px] text-white rounded-full flex-shrink-0">2</h2>
                        <h3 className="text-lg font-bold dark:text-neutral-700">Free Teaching Materials</h3>
                    </div>
                    <div className="promo-list flex items-center gap-5 bg-slate-200 p-7 rounded-md">
                        <h2 className="inline-block w-16 h-16 text-center bg-rose-500 text-4xl font-semibold leading-[64px] text-white rounded-full flex-shrink-0">3</h2>
                        <h3 className="text-lg font-bold dark:text-neutral-700">Free Teaching Materials</h3>
                    </div>
                    <div className="promo-list flex items-center gap-5 bg-slate-200 p-7 rounded-md">
                        <h2 className="inline-block w-16 h-16 text-center bg-rose-500 text-4xl font-semibold leading-[64px] text-white rounded-full flex-shrink-0">4</h2>
                        <h3 className="text-lg font-bold dark:text-neutral-700">An Accredited School</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promo;