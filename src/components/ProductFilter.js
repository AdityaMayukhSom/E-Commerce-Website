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
                className="max-w-[120px] inline-block px-6 py-2.5 my-4 bg-[#da9e1c] text-[#302605] font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2bc3f] hover:shadow-lg  focus:outline-none focus:ring-0 active:bg-[#f2bc3f] active:shadow-lg transition duration-150 ease-in-out"
            >
                Apply Now
            </button>
        </div>
    );
};

export default ProductFilter;
