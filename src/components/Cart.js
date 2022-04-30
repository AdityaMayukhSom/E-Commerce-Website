import '../css/tailwind.min.css';
import CartDetails from './CartDetails';
import CartSummary from './CartSummary';

const Cart = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-[#222222] text-[#de993f] py-8">
            <CartDetails />
            <CartSummary />
        </div>
    );
};

export default Cart;
