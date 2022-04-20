import '../css/tailwind.min.css';

const ImageCarousol = () => {
    return (
        <div className="relative w-full">
            <div className="h-[300px] sm:h-[350px] md:h-[450px] sl:h-[480px] lg:h-[510px] llg:h-[615px] w-full overflow-hidden">
                <img
                    src="./images/model6.jpg"
                    alt=""
                    className="w-full relative
                
                scale-[1.8] translate-x-20 translate-y-0
                sm:scale-[1.8] sm:translate-x-20 sm:-translate-y-4
                md:scale-[1.6] md:translate-x-20 md:-translate-y-12
                sl:scale[1.6] sl:translate-x-32 sl:-translate-y-16
                lg:scale-[1.5] lg:translate-x-36 lg:-translate-y-32
                llg:scale-[1.45] llg:translate-x-56 llg:-translate-y-32
                "
                />
            </div>

            <div className=" absolute  text-black flex flex-col  w-1/2 max-w-[600px] drop-shadow-md top-1/2 -translate-y-1/2 pl-12 sl:pl-20">
                <div className="font-serif font-extrabold text-3xl sm:text-3xl sm:pr-12 md:text-5xl md:pr-12 sl:text-6xl  sl:pr-6 sltlg:text-7xl  sltlg:pr-4 lg:text-7xl  lg:pr-4">Find Your Favourite Collection At Spring Sale</div>
                <a
                    href="#_"
                    className="flex  drop-shadow-md items-center justify-center font-medium text-center tracking-wide text-white transition duration-200 bg-black rounded-md hover:bg-gray-900  my-2 sl:my-6 sltlg:my-4
                w-[100px] h-8 text-sm
                sm:w-[130px] sm:h-12 sm:text-lg
                md:w-[130px] md:h-12 md:text-lg
                sltlg:w-[170px] sltlg:h-14 sltlg:text-xl
                lg:w-[170px] lg:h-14 lg:text-xl 
                "
                >
                    Shop Now
                </a>
            </div>
        </div>
    );
};

export default ImageCarousol;
