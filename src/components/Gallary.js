import '../css/tailwind.min.css';

const Gallary = () => {
    const imageURL3 = 'https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const imageURL2 = 'https://images.pexels.com/photos/8574719/pexels-photo-8574719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const imageURL5 = 'https://images.pexels.com/photos/2776180/pexels-photo-2776180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const imageURL6 = 'https://images.pexels.com/photos/1680178/pexels-photo-1680178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    return (
        <div className="px-4 pt-10 mx-auto flex flex-wrap">
            <div className="w-full mb-10 text-2xl sm:text-3xl md:text-6xl font-bold text-center border-b-2 mx-24 font-cardo drop-shadow-md border-[#de993f] pb-6 select-none">Styles That You Love.</div>
            <div className="flex flex-wrap md:m-2 m-1">
                <div className="flex flex-wrap w-1/2">
                    <div className="md:p-3 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="./images/model8.jpg" />
                    </div>
                    <div className="md:p-3 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src={imageURL2} />
                    </div>
                    <div className="md:p-3 p-1 w-full">
                        <img alt="gallery" className="w-full h-full object-cover object-center block" src={imageURL3} />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                    <div className="md:p-3 p-1 w-full">
                        <img alt="gallery" className="w-full h-full object-cover object-center block" src="./images/model9.jpg" />
                    </div>
                    <div className="md:p-3 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src={imageURL5} />
                    </div>
                    <div className="md:p-3 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src={imageURL6} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallary;
