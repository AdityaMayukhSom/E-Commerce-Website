import '../css/tailwind.min.css';
import { useState } from 'react';

const CartItem = (props) => {
    const [count, setCount] = useState(1);
    const decreamentCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const increamentCount = () => {
        setCount(count + 1);
    };

    let price = parseFloat(Number(props.price)).toFixed(2);
    let totalPrice = parseFloat(Number(count * price)).toFixed(2);
    const imageURL = `./images/product/${props.itemFor}/${props.itemCode}01.webp`;

    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="w-32">
                    <img className="h-32" src={imageURL} alt="" />
                </div>
                <div className="flex flex-col ml-4 flex-grow">
                    <span className="font-bold text-xl mt-4">{props.itemName}</span>
                    <span className="text-gray-500 text-md">Peter England</span>
                    <button className="font-semibold hover:text-red-500 text-gray-500 text-xs mt-auto mb-3">Remove</button>
                </div>
            </div>

            <div className="inline-flex items-center w-1/5 justify-center">
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
            <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
            <span className="text-center w-1/5 font-semibold text-sm">${totalPrice}</span>
        </div>
    );
};
export default CartItem;
