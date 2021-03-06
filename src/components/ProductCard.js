import '../css/tailwind.min.css';
import { useState } from 'react';

const ProductCard = (props) => {
    const imageURL = `./images/product/${props.forPage}/${props.productImage}`;
    const [count, setCount] = useState(1);
    const decreamentCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const increamentCount = () => {
        setCount(count + 1);
    };
    // let showDetailsClass = '';
    // const [showDetails, setShowDetails] = useState(false);
    // const viewDetails = () => {
    //     setShowDetails(true);
    //     showDetailsClass = showDetails ? `h-screen w-screen absolute` : `hidden h-screen w-screen absolute`;
    // };

    return (
        <div className="flex justify-center items-center  md:mx-2 lg:mx-4 mx-4 my-4 ">
            <div className="max-w-[400px] sm:max-w-[300px] md:max-w-[280px] w-full h-full lg:max-w-[350px] bg-[#191919] text-[#b88746] shadow rounded-lg overflow-hidden">
                <div className="h-60 w-full bg-gray-200 flex flex-col justify-between bg-cover bg-center relative overflow-hidden rounded-t">
                    <img src={imageURL} alt="" className="w-full" />
                    <div className="flex absolute w-full h-60 flex-col z-20 p-4">
                        <div className="flex justify-end items-center">
                            <button className="text-white flex items-center justify-center rounded-full hover:bg-gray-200 hover:bg-opacity-25 p-1">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-auto">
                            <span className="uppercase text-xs bg-green-100 p-1 border-green-600 border rounded text-green-800 font-medium select-none">available</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex flex-col mb-2">
                    <p className=" mx-2 w-full font-light text-xs">Peter England</p>
                    <h1 className="mx-2 w-full text-2xl font-bold font-serif mt-1">{props.productName}</h1>
                    <div className="flex justify-between my-2 mx-2">
                        <p className="text-center mt-1 flex items-center justify-center text-2xl font-sans font-semibold ">$29</p>
                        <div className="inline-flex items-center">
                            <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200" onClick={() => decreamentCount()}>
                                <svg className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                </svg>
                            </button>
                            <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">{count}</div>
                            <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200" onClick={() => increamentCount()}>
                                <svg className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <button className="py-3 mx-2 px-4 w-1/2 disabled:opacity-50 mt-2 flex items-center justify-center bg-[#da9e1c] text-[#302605] font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2bc3f] hover:shadow-lg  focus:outline-none focus:ring-0 active:bg-[#f2bc3f] active:shadow-lg transition duration-150 ease-in-out">
                            Add To Cart
                        </button>
                        <button className="py-3 mx-2 px-4 w-1/2 disabled:opacity-50 mt-2 flex items-center justify-center bg-[#da9e1c] text-[#302605] font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2bc3f] hover:shadow-lg  focus:outline-none focus:ring-0 active:bg-[#f2bc3f] active:shadow-lg transition duration-150 ease-in-out">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
