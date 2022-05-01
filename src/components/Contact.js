import '../css/tailwind.min.css';

const Contact = () => {
    return (
        <div className="min-h-[calc(100vh_-_89px)] px-2 md:px-8 grid gap-8 grid-cols-1 lg:grid-cols-2 lg:px-8 xl:px-32 py-8  text-gray-900">
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl text-yellow-500 drop-shadow-lg text-center md:text-left sm:text-4xl md:text-5xl font-bold leading-tight whitespace-nowrap">
                        Issue With Product?
                        <br />
                        Drop A Mail!
                    </h2>
                    <div className="text-white drop-shadow-lg mt-4 text-center md:text-left">
                        We'll Try To Resolve Your Issue <span className="underline">As Soon As Possible</span>.
                    </div>
                </div>
                <div className="text-center h-96 mt-6 flex justify-center">
                    <img src="./images/contact.svg" alt="" className="h-full" />
                </div>
            </div>
            <div className="pt-12 px-3">
                <div>
                    <span className="uppercase text-sm text-yellow-500 font-bold">Full Name</span>
                    <input className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-yellow-500 " type="text" placeholder="" />
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-yellow-500 font-bold">Email</span>
                    <input className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-yellow-500 " type="text" />
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-yellow-500 font-bold">Message</span>
                    <textarea className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-yellow-500 "></textarea>
                </div>
                <div className="mt-8">
                    <button className="uppercase text-sm font-bold tracking-wide bg-[#e2b100] hover:bg-yellow-400 text-[#191919] p-3 rounded-lg  focus:outline-none  w-full sm:w-[200px]">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
