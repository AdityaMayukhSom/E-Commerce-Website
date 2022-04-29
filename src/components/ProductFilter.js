import '../css/tailwind.min.css';
import FilterList from './FilterList';

const ProductFilter = () => {
    return (
        <div className=" px-6 py-3 my-3 flex flex-col max-w-[210px] border-r-2 border-[#553f23]">
            <div className="font-bold text-3xl mx-3 pb-2">Filter</div>
            <FilterList />
            <FilterList />
            <FilterList />
            <FilterList />
            <button
                type="button"
                className="max-w-[120px] inline-block px-6 py-2.5  focus:bg-gray-900 focus:shadow-lg mt-4
                
                bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg  focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
            >
                Apply Now
            </button>
        </div>
    );
};

export default ProductFilter;
