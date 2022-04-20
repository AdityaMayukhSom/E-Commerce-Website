import '../css/tailwind.min.css';
import Products from './Products';
import ProductFilter from './ProductFilter';

const Women = () => {
    return (
        <div>
            <div className="h-36 justify-center items-center flex bg-cover overflow-hidden relative">
                <img src="./images/background02.jpg" alt="" className="object-cover min-h-full min-w-full" />
                <div className="flex font-sans font-bold text-5xl md:text-6xl  whitespace-nowrap text-white drop-shadow-md absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">Women's Section</div>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-[210px_1fr]">
                <div className="hidden  md:block">
                    <ProductFilter />
                </div>
                <Products colour="bg-[#eddeee]" forPage="women" productImage="101.webp" productName="Indian Kurta" />
            </div>
        </div>
    );
};

export default Women;
