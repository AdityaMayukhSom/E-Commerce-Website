import '../css/tailwind.min.css';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = () => {
    return (
        <div className="flex bg-gray-100 my-4 py-4">
            <div className="w-3/4 bg-white px-16 mx-6 py-8">
                <div className="flex justify-between border-b pb-8 items-center">
                    <h1 className="font-semibold text-4xl">Your Cart</h1>
                    <h2 className="font-semibold text-3xl">2 Items</h2>
                </div>

                <div className="flex mt-4 mb-5">
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
                </div>

                <CartItem price="199" itemName="Western Yellow T-Shirt" itemFor="men" itemCode="1" />
                <CartItem price="149" itemName="Indian Kurta" itemFor="women" itemCode="1" />

                <button className="flex bg-gray-800 text-white font-medium  leading-tight rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out py-3 text-sm items-center justify-center  uppercase w-[200px] mt-4">
                    <svg className="fill-current mr-2 text-white w-4" viewBox="0 0 448 512">
                        <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                    </svg>
                    Continue Shopping
                </button>
            </div>
            <CartSummary />
        </div>
    );
};

export default Cart;
