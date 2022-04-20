import { Link } from 'react-router-dom';
import '../css/tailwind.min.css';
import FooterColumn from './FooterColumn';

const Footer = () => {
    return (
        <footer className="bg-white pt-2 mt-4 ">
            <div className="flex flex-col lg:flex-row border-t-2 border-gray-200 mx-8 pt-4">
                <div className="w-full lg:w-1/3 mb-10 px-8">
                    <Link to="/" className="inline-flex">
                        <img className="h-24" src="./images/logo.jpg" alt="Logo"></img>
                    </Link>
                    <div className="">
                        <div className=" tracking-wide pl-1 mt-2 mb-6 h-12">
                            <span className="text-3xl lg:text-2xl  font-extrabold border-b-2 whitespace-nowrap border-black pb-3 text-black border-dashed">Subscribe For Updates</span>
                        </div>

                        <form className="flex flex-col mt-2 md:flex-row">
                            <input
                                placeholder="Email"
                                required
                                type="text"
                                className="flex-grow w-full max-w-[350px] md:max-w-[250px] h-10 px-4 mb-3 transition duration-200 bg-white border border-gray-500 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            />
                            <button type="submit" className="inline-flex max-w-[350px] items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:shadow-outline ">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="w-full lg:w-2/3  grid gap-2 grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 px-10 justify-between pt-2">
                    <FooterColumn />
                    <FooterColumn />
                    <FooterColumn />
                    <FooterColumn />
                </div>
            </div>

            <div className="flex flex-col justify-between text-center md:text-left pt-4 pb-6 border-t border-gray-500 md:flex-row mx-10">
                <div class="flex flex-col md:flex-row items-center">
                    <p className="text-sm text-gray-600">© Copyright 2022. Built With ❤️ By Aditya Mayukh Som.</p>
                    <p className="text-sm px-0 md:px-1 text-gray-600">All Rights Reserved.</p>
                </div>
                <div className="flex items-center justify-center mt-4 space-x-4 sm:mt-0">
                    <a href="www.twitter.com" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                        </svg>
                    </a>
                    <a href="www.instagram.com" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                        <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                            <circle cx="15" cy="15" r="4" />
                            <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                        </svg>
                    </a>
                    <a href="www.facebook.com" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
