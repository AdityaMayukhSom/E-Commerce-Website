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
    const imageURL = `./images/product/${props.itemFor}/${props.itemCode}${props.imageCode}.webp`;

    return (
        <div className="flex flex-row items-center hover:bg-[#222222]  pl-4 py-5">
            <div className="grid grid-cols-[8rem_auto] w-auto lg:w-2/5">
                <div className="w-32 h-40 flex flex-col bg-center overflow-hidden">
                    <img className=" w-full" src={imageURL} alt="" />
                </div>
                <div className="lg:flex flex-col ml-4 justify-start hidden">
                    <span className="font-bold text-xl mt-4">{props.itemName}</span>
                    <span className="text-white text-md">Peter England</span>
                    <button className="font-semibold hover:text-red-500 text-gray-500 text-xs mt-auto mb-3 max-w-none lg:max-w-[100px] text-left">Remove</button>
                </div>
            </div>
            <div className="w-full lg:w-3/5 flex flex-col lg:flex-row">
                <div className="flex flex-col lg:hidden px-4">
                    <span className="font-bold text-xl lg:text-3xl">{props.itemName}</span>
                    <span className="text-white text-md">Peter England</span>
                </div>
                <div className="w-full flex flex-col  sm:flex-row py-4 lg:py-0">
                    <div className="flex lg:inline-flex items-center w-full lg:w-1/3 justify-center">
                        <button className=" text-[#b88746] disabled:opacity-50 inline-flex items-center px-2 py-1 text-4xl" onClick={() => decreamentCount()}>
                            &minus;
                        </button>
                        <div className="text-[#b88746] inline-flex items-center px-4 py-1 select-none ">{count}</div>
                        <button className="text-[#b88746] disabled:opacity-50 inline-flex items-center px-2 py-1 text-3xl" onClick={() => increamentCount()}>
                            &#43;
                        </button>
                    </div>
                    <div className="w-full lg:w-1/3 font-semibold flex justify-center items-center text-md">${price}</div>
                    <div className="w-full text-center lg:w-1/3 font-semibold flex justify-center items-center text-md">${totalPrice}</div>
                </div>
            </div>
        </div>
    );
};
export default CartItem;
