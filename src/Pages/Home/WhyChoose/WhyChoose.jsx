import choice1 from '../../../assets/Home/choice.png'
import choice2 from '../../../assets/Home/expert.png'
import choice3 from '../../../assets/Home/teaching.png'

const WhyChoose = () => {
    return (
        <div className="container">
            <div className="chooses flex flex-wrap lg:flex-nowrap gap-8"> 
                <div className="choose text-center p-10 bg-white rounded-lg hover:shadow-md transition-all">
                    <img src={choice1} alt="" className='block m-auto mb-5 w-24' />
                    <h3 className='text-xl font-bold mb-4'>Highly Experienced</h3>
                    <p>All of our Instructors are highly experienced and expert at their subject.</p>
                </div>
                <div className="choose text-center p-10 bg-white rounded-lg hover:shadow-md transition-all">
                    <img src={choice2} alt="" className='block m-auto mb-5 w-24'/>
                    <h3 className='text-xl font-bold mb-4'>Question, Quiz & Course</h3>
                    <p>All of our Instructors are highly experienced and expert at their subject.</p>
                </div>
                <div className="choose text-center p-10 bg-white rounded-lg hover:shadow-md transition-all">
                    <img src={choice3} alt="" className='block m-auto mb-5 w-24'/>
                    <h3 className='text-xl font-bold mb-4'>Dedicated Support</h3>
                    <p>All of our Instructors are highly experienced and expert at their subject.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;