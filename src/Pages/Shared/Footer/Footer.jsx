import logoWhite from '../../../assets//Header/logo-dark.png'
import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube, } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="py-20 bg-slate-800">
            <div className="container">
                <div className="footer text-slate-200 flex flex-col md:flex-row gap-8 ">
                    <div className="w-6/12 xl:w-6/12">
                        <img src={logoWhite} alt="" className="mb-3" />
                        <p className="mb-5">Summer Language is the trying to educates their student to achive other language knowledge as well as thei mother language.</p>
                        <h4 className="font-semibold mb-2">Follow Us</h4>
                        <div className="flex gap-4">
                            <Link to=''>
                                <FaFacebook className="text-2xl text-slate-300 hover:text-emerald-500 transition-all"></FaFacebook>
                            </Link>
                            <Link to=''>
                                <FaTwitter className="text-2xl text-slate-300 hover:text-emerald-500 transition-all"></FaTwitter>
                            </Link>
                            <Link to=''>
                                <FaLinkedin className="text-2xl text-slate-300 hover:text-emerald-500 transition-all"></FaLinkedin>
                            </Link>
                            <Link to=''>
                                <FaYoutube className="text-2xl text-slate-300 hover:text-emerald-500 transition-all"></FaYoutube>
                            </Link>
                        </div>
                    </div>
                    <div className="w-3/12 md:w-6/12 xl:w-3/12">
                        <span className="text-slate-200 dark:text-slate-400 text-lg uppercase font-semibold mb-2">Pages</span>
                        <Link to='/' className="link link-hover mb-2 last:mb-0">Home</Link>
                        <Link to='/instructors' className="link link-hover mb-2 last:mb-0">Instructors</Link>
                        <Link to='/classes' className="link link-hover mb-2 last:mb-0">Classes</Link>

                    </div>
                    <div className="w-3/12 md:w-6/12 xl:w-3/12">
                        <span className="text-slate-200 dark:text-slate-400 text-lg uppercase font-semibold mb-2">Courses</span>
                        <Link to='/' className="link link-hover mb-2 last:mb-0">Home</Link>
                        <Link to='/' className="link link-hover mb-2 last:mb-0">Instructors</Link>
                        <Link to='/' className="link link-hover mb-2 last:mb-0">Classes</Link>

                    </div>
                    <div className="w-3/12 md:w-6/12 xl:w-3/12">
                        <span className="text-slate-200 dark:text-slate-400 text-lg uppercase font-semibold mb-2">Contact</span>
                        <div className="">
                            <div className="flex gap-4 mb-4">
                                <FaMapMarkerAlt className="text-2xl"></FaMapMarkerAlt>
                                <div className="">
                                    <p>102/24 Katai Khana More
                                        <br />
                                        Kushtia Sadar,
                                        <br />
                                        Kushtia - 7000
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <FaEnvelope className="text-xl"></FaEnvelope>
                                <a href="mailto:theasad.dev@gmail.com">contact@theasad.com</a>
                            </div>
                            <div className="flex gap-4">
                                <FaPhone className="text-xl"></FaPhone>
                                <a href="tel:+8801735919028">01735919028</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright text-center border-t pt-8 mt-8">
                    <p className='text-sm text-slate-200'>&copy; 2023 All Right Reserved by Summer Language.</p>
                </div>
            </div>
        </footer>
    )
};
 
export default Footer;