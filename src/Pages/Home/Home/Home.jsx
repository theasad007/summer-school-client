import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useRef } from "react";
// SLider Img
import slide1 from '../../../assets/Home/Slider/home-slide1.jpg'
import slide2 from '../../../assets/Home/Slider/home-slide2.jpg'
import slide3 from '../../../assets/Home/Slider/home-slide3.jpg'
// Bg Image
import bgCounter from '../../../assets/Home/counter-bg.jpg'
// Blogs
import blog1 from '../../../assets/Home/blog1.jpg'
import blog2 from '../../../assets/Home/blog2.jpg'
import blog3 from '../../../assets/Home/blog3.jpg'
// Page CSS
import './Home.css'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Promo from "../Promo/Promo";
import { Fade } from "react-awesome-reveal";
import WhyChoose from "../WhyChoose/WhyChoose";
import CounterUp from "../CounterUp/CounterUp";

const Home = () => {
    // Banner Circle
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div>
            <Helmet>
                <title>Summer Laguage School | Home</title>
            </Helmet>
            <div className="slider-area">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide className="relative py-32 md:py-40" style={{ background: `url(${slide1}) no-repeat scroll center center / cover` }}>
                        <div className="container">
                            <div className="text-left w-full md:w-8/12">
                                <h2 className="text-4xl md:text-5xl md:leading-[1.2em] bg xl:text-7xl  text-white font-bold lg:leading-normal xl:leading-[1.3em] mb-5">
                                    Study Languages
                                    <br />
                                    Having Fun!
                                </h2>
                                <p className="text-white text-lg md:text-xl mb-8">
                                    We Have the International Reputations for
                                    <br />
                                    High Quality Teaching and Success
                                </p>
                                <Link to='classes'>
                                    <button className="btn h-auto border-0 py-4 px-10 rounded-3xl text-sm text-white font-bold bg-rose-500 hover:bg-rose-600">Learn More</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative py-32 md:py-40" style={{ background: `url(${slide2}) no-repeat scroll center center / cover` }}>
                        <div className="container">
                            <div className="text-left w-full md:w-8/12">
                                <h2 className="text-4xl md:text-5xl md:leading-[1.2em] bg xl:text-7xl  text-white font-bold lg:leading-normal xl:leading-[1.3em] mb-5">
                                    Success is
                                    <br />
                                    Always With You
                                </h2>
                                <p className="text-white text-lg md:text-xl mb-8">
                                    We Have the International Reputations for
                                    <br />
                                    High Quality Teaching and Success
                                </p>
                                <Link to='classes'>
                                    <button className="btn h-auto border-0 py-4 px-10 rounded-3xl text-sm text-white font-bold bg-rose-500 hover:bg-rose-600">Learn More</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative py-32 md:py-40" style={{ background: `url(${slide3}) no-repeat scroll center center / cover` }}>
                        <div className="container">
                            <div className="text-left w-full md:w-8/12">
                                <h2 className="text-4xl md:text-5xl md:leading-[1.2em] bg xl:text-7xl  text-white font-bold lg:leading-normal xl:leading-[1.3em] mb-5">
                                    Learn New to
                                    <br />
                                    Build New
                                </h2>
                                <p className="text-white text-lg md:text-xl mb-8">
                                    We Have the International Reputations for
                                    <br />
                                    High Quality Teaching and Success
                                </p>
                                <Link to='classes'>
                                    <button className="btn h-auto border-0 py-4 px-10 rounded-3xl text-sm text-white font-bold bg-rose-500 hover:bg-rose-600">Learn More</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>

            <div className="popular-classes py-20">
                <Fade delay={200} damping={1e-1}>
                    <SectionTitle
                        subTitle={'You Will Love'}
                        title={'Popular Classes'}
                    ></SectionTitle>
                    <PopularClasses></PopularClasses>
                </Fade>
            </div>

            <div className="why-choose py-20 bg-slate-100">
                <SectionTitle
                    subTitle={'Why Choose Us?'}
                    title={'Choice Make the difference.'}
                ></SectionTitle>
                <WhyChoose></WhyChoose>
            </div>

            <div className="popular-Instructors py-20">
                <Fade delay={200} damping={1e-1}>
                    <SectionTitle
                        subTitle={'Learn From'}
                        title={'Popular Instructors'}
                    ></SectionTitle>
                    <PopularInstructors></PopularInstructors>
                </Fade>
            </div>

            <div className="promo-area pb-20">
                <Fade delay={200} damping={1e-1}>
                    <Promo></Promo>
                </Fade>
            </div>
            <div className="testimonial-area pb-20">
                <div className="container">
                    <SectionTitle
                        subTitle={'Testimonial'}
                        title={'We Take Loves'}
                    ></SectionTitle>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        // autoplay={{
                        //     delay: 4500,
                        //     disableOnInteraction: false,
                        // }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"

                    >

                        <SwiperSlide className="relative py-32 md:py-40" >
                            <div className="info w-6/12">
                                <h4 className="font-bold text-2xl mb-5">Angkon Islam</h4>
                                <p>Summer School is awesome. I learn a lot from here. All Intructors are very helpful and talented. Courses are updated and very needy for us.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="relative py-32 md:py-40" >
                            <div className="info w-6/12">
                                <h4 className="font-bold text-2xl mb-5">Forhad Hossain</h4>
                                <p>Summer School is awesome. I learn a lot from here. All Intructors are very helpful and talented. Courses are updated and very needy for us.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="relative py-32 md:py-40" >
                            <div className="info w-6/12">
                                <h4 className="font-bold text-2xl mb-5">Sumon Islam</h4>
                                <p>Summer School is awesome. I learn a lot from here. All Intructors are very helpful and talented. Courses are updated and very needy for us.</p>
                            </div>
                        </SwiperSlide>

                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
            </div>
            <div className="counter-area py-20" style={{ background: `url(${bgCounter})` }}>
                <div className="title text-center mb-20">
                    <p className="text-rose-600 text-base font-semibold">Our Success</p>
                    <h2 className="text-white inline-block text-2xl md:text-4xl font-bold uppercase">Facts We have</h2>
                </div>
                <CounterUp></CounterUp>
            </div>



            <div className="blog-area py-20">
                <div className="container">
                    <SectionTitle
                        subTitle={'Read our'}
                        title={'Latest Article and News'}
                    ></SectionTitle>
                    <div className="blogs-wrap grid grid-cols-1 md:grid-cols-3 gap-8">
                        <article>
                            <img src={blog1} alt="" className="mb-5 w-full" />
                            <h2 className="text-xl font-bold ">Oculus VR time-warping nightclub game is unlike anything you have tried before</h2>
                        </article>
                        <article>
                            <img src={blog2} alt="" className="mb-5 w-full" />
                            <h2 className="text-xl font-bold ">Facebook is merging its messaging system for Messenger, Instagram, and WhatsApp</h2>
                        </article>
                        <article>
                            <img src={blog3} alt="" className="mb-5 w-full" />
                            <h2 className="text-xl font-bold ">Google’s I/O developer conference will kick off on May 7th</h2>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;