import '../css/tailwind.min.css';

const ProductDetails = () => {
    const productImageLink = `https://images.pexels.com/photos/11142021/pexels-photo-11142021.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`;
    return (
        <section className="px-5 py-24 mx-auto bg-[#151515]">
            <div className="md:w-5/6 mx-auto flex flex-wrap items-center">
                <div className="md:w-2/5 w-full h-[650px] max-w-[580px] flex items-center overflow-hidden sm:mx-16 md:mx-0">
                    <img alt="ecommerce" className="w-full object-cover object-center rounded" src={productImageLink} />
                </div>
                <div className="md:w-3/5 w-full md:pl-10 md:py-6 mt-6 md:mt-0">
                    <h2 className="text-sm title-font py-3 text-[#de993f] tracking-widest">BRAND NAME</h2>
                    <h1 className="text-[#de993f]  text-4xl lg:text-5xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                    <div className="flex my-4">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-gray-600 ml-3">4 Reviews</span>
                        </span>
                    </div>
                    <p className="leading-relaxed text-justify">
                        Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
                        shorts keytar banjo tattooed umami cardigan.
                    </p>

                    <div className="mt-8">
                        <div className="flex items-center">
                            <h4 className="flex-shrink-0 pr-4 text-sm leading-5 tracking-wider font-semibold uppercase text-[#de993f]">Available Offers</h4>
                            <div className="flex-1 border-t-2 border-[#de993f]"></div>
                        </div>
                        <ul className="mt-8 grid grid-rows-4 gap-y-2">
                            <li className="flex items-start ">
                                <div className="flex-shrink-0">
                                    <img className="h-5 w-5" src="./images/pricetag.svg" alt="PriceTag" />
                                </div>
                                <p className="ml-3 text-sm font-medium leading-5">100% Pure Cotton</p>
                            </li>
                            <li className="flex items-start ">
                                <div className="flex-shrink-0">
                                    <img className="h-5 w-5" src="./images/pricetag.svg" alt="PriceTag" />
                                </div>
                                <p className="ml-3 text-sm font-medium leading-5">Free Shipping</p>
                            </li>
                            <li className="flex items-start ">
                                <div className="flex-shrink-0">
                                    <img className="h-5 w-5" src="./images/pricetag.svg" alt="PriceTag" />
                                </div>
                                <p className="ml-3 text-sm font-medium leading-5">COD Available</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0">
                                    <img className="h-5 w-5" src="./images/pricetag.svg" alt="PriceTag" />
                                </div>
                                <p className="ml-3 text-sm font-medium leading-5">Extra 10% Off With Pro</p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex mt-6 items-center pb-5 border-b-2 border-[#de993f] mb-5">
                        <div className="flex">
                            <span className="mr-3">Color</span>
                            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        </div>
                        <div className="flex ml-6 items-center">
                            <span className="mr-3">Size</span>
                            <select className="rounded px-1 py-1 text-black outline-none border-0 ring-0 focus:outline-none focus:ring-0 focus:border-0 active:border-0 active:outline-none active:ring-0 text-base">
                                <option>SM</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="font-semibold px-4 text-md bg-[#da9e1c] text-[#302605] leading-tight uppercase rounded shadow-md hover:bg-[#f2bc3f] hover:shadow-lg  focus:outline-none focus:ring-0 active:bg-[#f2bc3f] active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
