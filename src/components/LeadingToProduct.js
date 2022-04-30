import { Link } from 'react-router-dom';
import '../css/tailwind.min.css';
import LeadingToProductCard from './LeadingToProductCard';

const LeadingToProduct = () => {
    const menImage = 'https://images.unsplash.com/photo-1608494603682-913a9e8abee9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80';

    const womenImage = 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';

    const childImage = 'https://images.unsplash.com/photo-1595760780346-f972eb49709f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=827&q=80';

    const otherImage = 'https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';

    return (
        <div className="px-4 py-6 mx-auto flex flex-wrap">
            <div className="w-full mb-10 text-2xl sm:text-3xl md:text-6xl font-bold text-center border-b-2 font-cardo drop-shadow-md border-[#de993f] pb-6 text-[#de993f] mx-12 md:mx-24">What Are You Waiting For?</div>
            <div className="grid grid-cols-1 grid-rows-4 m-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 gap-y-4 lg:grid-rows-1 w-full">
                <Link to="/Men" className="flex justify-center items-center">
                    <LeadingToProductCard text="Shop For Mens" imgURL={menImage} />
                </Link>
                <Link to="/Women" className="flex justify-center items-center">
                    <LeadingToProductCard text="Shop For Women" imgURL={womenImage} />
                </Link>
                <Link to="/" className="flex justify-center items-center">
                    <LeadingToProductCard text="Shop For Kids" imgURL={childImage} />
                </Link>
                <Link to="/" className="flex justify-center items-center">
                    <LeadingToProductCard text="Shop Other Items" imgURL={otherImage} />
                </Link>
            </div>
        </div>
    );
};

export default LeadingToProduct;
