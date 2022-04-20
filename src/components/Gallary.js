import '../css/tailwind.min.css';

const Gallary = () => {
    return (
        <div className="px-4 pt-10 mx-auto flex flex-wrap">
            <div className="w-full mb-10 text-2xl sm:text-3xl md:text-6xl font-bold text-center border-b-2 mx-24 font-cardo drop-shadow-md border-gray-300 pb-6 text-gray-900">Styles That You Love.</div>
            <div className="flex flex-wrap md:m-2 m-1">
                <div className="flex flex-wrap w-1/2">
                    <div className="md:p-3 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="./images/model8.jpg" />
                    </div>
                    <div className="md:p-3 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="./images/model11.jpg" />
                    </div>
                    <div className="md:p-3 p-1 w-full">
                        <img alt="gallery" className="w-full h-full object-cover object-center block" src="./images/model10.jpg" />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                    <div className="md:p-3 p-1 w-full">
                        <img alt="gallery" className="w-full h-full object-cover object-center block" src="./images/model9.jpg" />
                    </div>
                    <div className="md:p-3 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="./images/model7.jpg" />
                    </div>
                    <div className="md:p-3 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="./images/model5.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallary;
