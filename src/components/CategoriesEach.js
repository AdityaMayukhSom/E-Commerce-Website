const CategoriesEach = (props) => {
    const categoryName = props.categoryName;
    const imageURL = `./images/categories/${categoryName}.jpg`;
    return (
        <div className="flex flex-col justify-center cursor-pointer mx-2 hover:scale-110 transition">
            <div className="flex justify-center">
                <span className="p-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400">
                    <div className="bg-white rounded-full overflow-hidden w-[130px] sm:w-[170px] h-[130px] sm:h-[170px] object-cover">
                        <img src={imageURL} alt="" className="min-h-full min-w-full" />
                    </div>
                </span>
            </div>
            <div className="px-6 py-3">
                <h2 className="font-bold text-2xl text-gray-900 text-center capitalize font-cardo">{categoryName}</h2>
            </div>
        </div>
    );
};
export default CategoriesEach;
