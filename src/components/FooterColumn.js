import '../css/tailwind.min.css';
import { Link } from 'react-router-dom';

const FooterColumn = () => {
    return (
        <div className="min-w-auto sm:min-w-[200px] mb-3 md:mb-10 text-center md:text-left">
            <h4 className="text-dark text-lg font-bold mb-3 md:mb-9">Resources</h4>
            <ul>
                <li>
                    <Link to="/" className="inline-block hover:text-blue-700 text-base text-body-color hover:text-primary leading-loose mb-0 md:mb-2">
                        Our Brand
                    </Link>
                </li>
                <li>
                    <Link to="/" className="inline-block hover:text-blue-700 text-base text-body-color hover:text-primary leading-loose mb-0 md:mb-2">
                        Our Products
                    </Link>
                </li>
                <li>
                    <Link to="/" className="inline-block hover:text-blue-700 text-base text-body-color hover:text-primary leading-loose mb-0 md:mb-2">
                        User Flow
                    </Link>
                </li>
                <li>
                    <Link to="/Contact" className="inline-block hover:text-blue-700 text-base text-body-color hover:text-primary leading-loose mb-0 md:mb-2">
                        User Strategy
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default FooterColumn;
