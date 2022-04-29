import '../css/tailwind.min.css';

const ImageCarousol = () => {
    const imageURL = `https://images.unsplash.com/photo-1548366565-22234a1e46e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`;
    return (
        <div className="relative w-full">
            <div className="h-[300px] sm:h-[350px] md:h-[450px] sl:h-[calc(100vh_-_89px)] w-full overflow-hidden">
                <img
                    src={imageURL}
                    alt=""
                    className="w-full relative
                
                scale-[1.3] translate-x-3 translate-y-0
                sm:scale-[1.1] sm:translate-x-5 sm:-translate-y-4
                md:scale-[1.15] md:translate-x-5 md:-translate-y-8
                sl:scale[1.2] sl:translate-x-12 sl:-translate-y-16
                lg:scale-[1.2] lg:translate-x-36 lg:-translate-y-32
                llg:scale-100 llg:translate-x-0 llg:-translate-y-32
                "
                />
            </div>

            <div className=" absolute  text-white flex flex-col  w-1/2 max-w-[600px]  top-1/2 -translate-y-1/2 pl-12 sl:pl-20">
                <div className="font-serif font-extrabold text-3xl drop-shadow-lg sm:text-3xl sm:pr-12 md:text-5xl md:pr-12 sl:text-6xl  sl:pr-6 sltlg:text-7xl  sltlg:pr-4 lg:text-7xl  lg:pr-4">Find Your Favourite Collection At Spring Sale</div>
                <a
                    href="#_"
                    className="flex  drop-shadow-md items-center justify-center font-medium text-center tracking-wide text-black transition duration-200 bg-white rounded-md hover:bg-gray-200  my-2 sl:my-6 sltlg:my-4
                w-[100px] h-8 text-sm
                sm:w-[130px] sm:h-12 sm:text-lg
                md:w-[130px] md:h-12 md:text-lg
                sltlg:w-[170px] sltlg:h-13 sltlg:text-xl
                lg:w-[170px] lg:h-13 lg:text-xl 
                "
                >
                    Shop Now
                </a>
            </div>
        </div>
    );
};

export default ImageCarousol;
