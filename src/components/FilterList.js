import '../css/tailwind.min.css';

const FilterList = () => {
    return (
        <div className="flex border-t-2 border-b-2 border-gray-300 flex-col p-2">
            <h2 className=" text-lg font-semibold pb-2">Categories</h2>
            <div className="space-y-2 text-sm">
                <label className="flex flex-row items-center space-x-1 ">
                    <input type="checkbox" className="" />
                    <div className="">Jeans</div>
                </label>
                <label className="flex flex-row items-center space-x-1 ">
                    <input type="checkbox" className="" />
                    <div className="">T-Shirts</div>
                </label>
                <label className="flex flex-row items-center space-x-1 ">
                    <input type="checkbox" className="" />
                    <div className="">Shirts</div>
                </label>
                <label className="flex flex-row items-center space-x-1 ">
                    <input type="checkbox" className="" />
                    <div className="">Hoodies</div>
                </label>
            </div>
        </div>
    );
};

export default FilterList;
