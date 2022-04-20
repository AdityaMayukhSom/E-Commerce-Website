import '../css/tailwind.min.css';
import { Link } from 'react-router-dom';

const FooterColumn = () => {
    return (
        <div className="min-w-[200px] mb-10">
            <h4 className="text-dark text-lg font-bold mb-9">Resources</h4>
            <ul>
                <li>
                    <Link to="/" className="inline-block text-base text-body-color hover:text-primary leading-loose mb-2">
                        Our Brand
                    </Link>
                </li>
                <li>
                    <Link to="/" className="inline-block text-base text-body-color hover:text-primary leading-loose mb-2">
                        Our Products
                    </Link>
                </li>
                <li>
                    <Link to="/" className="inline-block text-base text-body-color hover:text-primary leading-loose mb-2">
                        User Flow
                    </Link>
                </li>
                <li>
                    <Link to="/Contact" className="inline-block text-base text-body-color hover:text-primary leading-loose mb-2">
                        User Strategy
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default FooterColumn;
