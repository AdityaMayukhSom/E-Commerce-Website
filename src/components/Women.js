import '../css/tailwind.min.css';
import Products from './Products';
import ProductFilter from './ProductFilter';

const Women = () => {
    return (
        <div>
            <div className="h-36 justify-center items-center flex bg-cover overflow-hidden relative">
                <img src="./images/background02.jpg" alt="" className="object-cover min-h-full min-w-full" />
                <div className="w-full h-full background-darken absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
                <div className="flex text-4xl md:text-6xl uppercase whitespace-nowrap font-poppins font-semibold tracking-wider drop-shadow-lg absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 z-10">
                    Women's Section
                </div>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-[210px_1fr]">
                <div className="hidden bg-[#222222] text-[#de993f]  md:block">
                    <ProductFilter />
                </div>
                <Products colour="bg-[#242424]" forPage="women" productImage="101.webp" productName="Indian Kurta" />
            </div>
        </div>
    );
};

export default Women;
