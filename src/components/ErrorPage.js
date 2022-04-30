import '../css/tailwind.min.css';
import { Link } from 'react-router-dom';
import ErrorImage from './ErrorImage';

const ErrorPage = () => {
    return (
        <div className=" h-screen bg-black text-white">
            <div className="m-auto text-center">
                <div>
                    <ErrorImage />
                </div>
                <p className="text-sm md:text-base text-yellow-300 p-2 mb-4">The stuff you were looking for doesn't exist</p>
                <Link to="/" className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                    Retry
                </Link>
            </div>
        </div>
    );
};
export default ErrorPage;
