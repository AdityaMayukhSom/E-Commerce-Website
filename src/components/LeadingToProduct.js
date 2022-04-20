import { Link } from 'react-router-dom';
import '../css/tailwind.min.css';
import LeadingToProductCard from './LeadingToProductCard';

const LeadingToProduct = () => {
    const menImage = 'https://images.unsplash.com/photo-1608494603682-913a9e8abee9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80';

    const womenImage = 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';

    const childImage = 'https://images.unsplash.com/photo-1595760780346-f972eb49709f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=827&q=80';

    const otherImage = 'https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';

    return (
        <div className=" px-6 mb-8 py-8">
            <div className=" w-full mb-20 flex items-center justify-center">
                <div>
                    <h1 className="sm:text-3xl text-2xl md:text-5xl font-medium title-font mb-2 text-gray-900">What Are You Waiting For?</h1>
                    <div className="h-1 w-full bg-yellow-400 rounded"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-4 -m-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 gap-y-4 lg:grid-rows-1">
                <Link to="/Men">
                    <LeadingToProductCard text="Shop For Mens" imgURL={menImage} />
                </Link>
                <Link to="/Women">
                    <LeadingToProductCard text="Shop For Women" imgURL={womenImage} />
                </Link>
                <Link to="/">
                    <LeadingToProductCard text="Shop For Kids" imgURL={childImage} />
                </Link>
                <Link to="/">
                    <LeadingToProductCard text="Shop Other Items" imgURL={otherImage} />
                </Link>
            </div>
        </div>
    );
};

export default LeadingToProduct;
