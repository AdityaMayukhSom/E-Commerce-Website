import '../css/tailwind.min.css';

const FilterList = () => {
    const checkBoxClass = `text-[#222222] border-[#553f23] bg-[#222222] checked:border-2 checked:border-[#f6d428] hover:border-[#f6d428] checked:focus:border-[#f6d428] checked:hover:border-[#fff] `;
    return (
        <div className="flex border-t-2 border-b-1 border-[#553f23] flex-col p-2">
            <h2 className=" text-lg font-semibold pb-2">Categories</h2>
            <div className="space-y-2 text-sm">
                <label className="flex flex-row items-center space-x-2 cursor-pointer ">
                    <input type="checkbox" className=" text-[#222222] border-[#553f23] bg-[#222222] checked:border-2 checked:border-[#f6d428] hover:border-[#f6d428] checked:focus:border-[#f6d428] checked:hover:border-[#fff]" />
                    <div className="">Jeans</div>
                </label>
                <label className="flex flex-row items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className={checkBoxClass} />
                    <div className="">T-Shirts</div>
                </label>
                <label className="flex flex-row items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className={checkBoxClass} />
                    <div className="">Shirts</div>
                </label>
                <label className="flex flex-row items-center space-x-2 cursor-pointer ">
                    <input type="checkbox" className={checkBoxClass} />
                    <div className="">Hoodies</div>
                </label>
            </div>
        </div>
    );
};

export default FilterList;
