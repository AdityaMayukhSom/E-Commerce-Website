import '../css/tailwind.min.css';

const TrendingClothesCard = () => {
    return (
        <div className="flex w-[450px] md:w-[480px] bg-white rounded-lg shadow-md mx-4 my-4">
            <div className="w-1/3 h-[200px] overflow-hidden flex items-center justify-center rounded-l-lg">
                <img src="./images/vertical2.jpg" className="rounded-l-lg object-contain min-h-full min-w-full" alt="" />
            </div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800">White Dress OP</h1>
                <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p>
                <div className="flex mt-2 item-center">
                    <svg className="w-5 h-5 text-gray-700 fill-current " viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg className="w-5 h-5 text-gray-700 fill-current " viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg className="w-5 h-5 text-gray-700 fill-current " viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                </div>

                <div className="flex justify-between mt-3 item-center h-8">
                    <h1 className="text-lg font-bold md:text-xl h-full text-center flex items-center justify-center text-[#23C69D]">$20.00</h1>
                    <div className="h-full space-x-1 mt-1">
                        <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 h-full">View Details</button>
                        <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 h-full">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingClothesCard;
