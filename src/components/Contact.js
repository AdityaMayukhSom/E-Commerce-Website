import '../css/tailwind.min.css';

const Contact = () => {
    return (
        <div className=" px-8 bg-gray-100 grid gap-8 grid-cols-1 lg:grid-cols-2 md:px-12 lg:px-8 xl:px-32 py-8  text-gray-900">
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight whitespace-nowrap">
                        Issue With Product?
                        <br />
                        Drop A Mail!
                    </h2>
                    <div className="text-gray-700 mt-4">
                        We'll Try To Resolve Your Issue <span className="underline">As Soon As Possible</span>.
                    </div>
                </div>
                <div className="text-center h-96 mt-6 flex justify-center">
                    <img src="./images/contact.svg" alt="" className="h-full" />
                </div>
            </div>
            <div className="pt-12">
                <div>
                    <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                    <input className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-indigo-500 focus:shadow-outline" type="text" placeholder="" />
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                    <input className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-indigo-500 focus:shadow-outline" type="text" />
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                    <textarea className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-indigo-500 focus:shadow-outline"></textarea>
                </div>
                <div className="mt-8">
                    <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg  focus:outline-none focus:shadow-outline w-full sm:w-[200px]">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
