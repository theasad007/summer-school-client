import { FaArrowLeft } from 'react-icons/fa';
import errorImg from '../../assets/404/404-not-found.png'
import ToggleThemes from '../../ToggleTheme/ToggleTheme';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {

    return (
        <div className="error-page flex items-center">
            <Helmet>
                <title>Error 404| Summer Laguage School</title>
            </Helmet>
            <div className="container">
                <div className="404 text-center py-10">
                    <img src={errorImg} alt="" className='mx-auto' />
                    <Link to='/'>
                        <button className="btn h-auto py-5 px-10 rounded-full text-sm text-white font-bold bg-rose-500 hover:bg-rose-600"> <FaArrowLeft></FaArrowLeft> Back to Home</button>
                    </Link>
                </div>
            </div>
            {
                <button className="fixed top-1 right-1 md:top-10 md:right-10 ">
                    {
                        ToggleThemes()
                    }
                </button>
            }
        </div>
    );
};

export default ErrorPage;