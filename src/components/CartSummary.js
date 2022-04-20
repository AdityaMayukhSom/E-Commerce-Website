import '../css/tailwind.min.css';

const CartSummary = () => {
    return (
        <div id="summary" className="w-1/4 px-8 py-10 bg-white">
            <h1 className="font-semibold text-3xl border-b pb-4">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Items 2</span>
                <span className="font-semibold text-sm">800$</span>
            </div>
            <div>
                <label className="font-medium inline-block mb-3 text-sm outline-none focus:outline active:outline uppercase">Shipping Charges</label>
                <select className="block p-2 text-gray-600 w-full text-sm  focus:outline active:outline">
                    <option>Standard Shipping - $10.00</option>
                    <option>SuperFast Shipping - $15.00</option>
                    <option>One Day Shipping - $20.00</option>
                </select>
            </div>
            <div className="pt-6 pb-6">
                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
                    Got Any Coupon?
                </label>
                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
            </div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center ">
                Apply Code
            </button>
            <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total Cost</span>
                    <span>$810</span>
                </div>
                <button className="bg-gray-800 text-white font-medium  leading-tight rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out py-3 text-sm  uppercase w-full">
                    Checkout
                </button>
            </div>
        </div>
    );
};
export default CartSummary;
