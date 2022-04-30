import '../css/tailwind.min.css';
import CartItem from './CartItem';

const CartDetails = () => {
    return (
        <div className="w-full lg:w-3/4 bg-[#191919] px-6 lg:px-6 mx-0 lg:mx-6 py-8">
            <div className="flex justify-between border-b pb-8 items-center">
                <h1 className="font-semibold text-4xl">Your Cart</h1>
                <h2 className="font-semibold text-3xl">2 Items</h2>
            </div>

            <div className="lg:flex mt-4 mb-5 hidden">
                <h3 className="font-semibold text-[#b88746] text-xs pl-4 uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-[#b88746] text-xs uppercase w-1/5 ">Quantity</h3>
                <h3 className="font-semibold text-center text-[#b88746] text-xs uppercase w-1/5 ">Price</h3>
                <h3 className="font-semibold text-center text-[#b88746] text-xs uppercase w-1/5 ">Total</h3>
            </div>

            <CartItem price="199" itemName="Western Shirt" itemFor="men" itemCode="1" imageCode="01" />
            <CartItem price="149" itemName="Indian Kurta" itemFor="women" itemCode="1" imageCode="01" />
            <CartItem price="199" itemName="Western Shirt" itemFor="men" itemCode="1" imageCode="01" />
            <CartItem price="149" itemName="Indian Kurta" itemFor="women" itemCode="1" imageCode="01" />

            <button className="flex bg-[#da9e1c] text-[#302605] font-semibold  leading-tight rounded shadow-md hover:bg-[#f2bc3f] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#f2bc3f] active:shadow-lg transition duration-150 ease-in-out py-3 text-sm items-center justify-center  uppercase w-[200px] mt-4 mx-4">
                <svg className="fill-current mr-2 text-[#302605] w-4" viewBox="0 0 448 512">
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
            </button>
        </div>
    );
};

export default CartDetails;
