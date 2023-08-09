
// import counterUp from 'counterup2'

// const el = document.querySelector( '.counter' )

// // Start counting, do this on DOM ready or with Waypoints.
// counterUp( el, {
//     duration: 1000,
//     delay: 16,
// } )
import './CounterUp.css'
const CounterUp = () => {
    return (
        <div className="container">
            <div className="counters md:flex gap-8 justify-between">
                <div className="counter text-center mb-10 md:mb-0">
                    <h2 className="text-5xl font-bold text-white mb-4">3000+</h2>
                    <p className="text-xl text-white font-bold">Students</p>
                </div>
                <div className="counter text-center mb-10 md:mb-0">
                    <h2 className="text-5xl font-bold text-white mb-4">50+</h2>
                    <p className="text-xl text-white font-bold">Instructors</p>
                </div>
                <div className="counter text-center mb-10 md:mb-0">
                    <h2 className="text-5xl font-bold text-white mb-4">5000+</h2>
                    <p className="text-xl text-white font-bold">Lessons</p>
                </div>
                <div className="counter text-center mb-10 md:mb-0">
                    <h2 className="text-5xl font-bold text-white mb-4">1000+</h2>
                    <p className="text-xl text-white font-bold">Success Students</p>
                </div>
            </div>
        </div>
    );
};

export default CounterUp;