import '../css/tailwind.min.css';
import FilterList from './FilterList';

const ProductFilter = () => {
    return (
        <div className=" p-6 pt-4 flex flex-col max-w-[210px] border-r-2 border-gray-300">
            <div className="font-bold text-3xl mx-3 pb-2">Filter</div>
            <FilterList />
            <FilterList />
            <FilterList />
            <FilterList />
            <button
                type="button"
                className="max-w-[120px] inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out my-4"
            >
                Apply Now
            </button>
        </div>
    );
};

export default ProductFilter;
