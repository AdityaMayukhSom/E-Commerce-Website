import '../css/tailwind.min.css';
import Products from './Products';
import ProductFilter from './ProductFilter';

const Men = () => {
    return (
        <div>
            <div className=" h-36 justify-center items-center flex bg-cover overflow-hidden relative">
                <img src="./images/background02.jpg" alt="" className="object-cover min-h-full min-w-full" />
                <div className="w-full h-full background-darken absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
                <div className="flex text-4xl md:text-6xl uppercase whitespace-nowrap font-poppins font-semibold tracking-wider drop-shadow-lg absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 z-10">
                    Men's Section
                </div>
            </div>
            <div className="grid grid-cols-1 bg-[#222222] text-[#b88746]  md:grid-cols-[210px_1fr]">
                <div className="hidden md:block">
                    <ProductFilter />
                </div>

                <Products colour="bg-[#222222]" forPage="men" productImage="101.webp" productName="Western T-Shirts" />
            </div>
        </div>
    );
};

export default Men;
