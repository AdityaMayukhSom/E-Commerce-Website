import '../css/tailwind.min.css';
const Hero = () => {
    const imageURL = `https://images.unsplash.com/photo-1548366565-22234a1e46e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`;

    return (
        <header className="bg-[#191919] flex items-center sl:h-[calc(100vh_-_89px)] ">
            <div className="w-full flex flex-col px-6 py-4 mx-auto space-y-6 lg:space-y-0 lg:flex-row lg:items-center h-fit">
                <div className="flex items-center justify-center h-72 md:h-96 sm:w-[500px] md:w-[600px]  lg:w-1/2 self-center">
                    <img className="object-cover w-full h-full max-w-2xl rounded-md" src={imageURL} alt="This is a model" />
                </div>

                <div className="flex flex-col items-center w-full lg:h-96 lg:flex-row lg:w-1/2">
                    <div className="w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-auto lg:mx-12">
                        <h1 className="text-3xl font-semibold font-cardo text-gray-800 dark:text-white lg:text-5xl">
                            Our Greatest Collection
                            <br />
                            At Your Fingertips
                        </h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 text-justify">
                            But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                        </p>
                        <div className="mt-6">
                            <button
                                href="#"
                                className="block px-6 text-center transform  lg:inline  bg-[#da9e1c] text-[#302605] font-semibold  leading-tight rounded shadow-md hover:bg-[#f2bc3f] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#f2bc3f] active:shadow-lg transition duration-150 ease-in-out py-3 text-sm items-center justify-center  uppercase"
                            >
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                        <button className="w-3 h-3 mx-2 bg-[#da9e1c] rounded-full lg:mx-0 focus:outline-none"></button>
                        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-[#da9e1c]"></button>
                        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-[#da9e1c]"></button>
                        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-[#da9e1c]"></button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
