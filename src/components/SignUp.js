import '../css/tailwind.min.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-row flex-wrap h-full ">
                <Link to="/" className="flex w-full justify-center items-center mt-4 mb-8 md:hidden">
                    <img className="h-20 sm:h-32" src="./images/logoInvert.png" alt="Logo"></img>
                </Link>
                <div className="w-full lg:w-1/2 md:min-h-screen min-h-[60vh] bg-[#272727] flex flex-col justify-center items-center p-12">
                    <img src="./images/ECommerce2.svg" className="w-full h-full md:w-3/4 lg:w-5/6" alt="Phone" />
                </div>
                <div className="w-full  lg:w-1/2 flex flex-col items-center justify-center">
                    <Link to="/" className="md:flex justify-center mt-4 mb-6 hidden">
                        <img className="h-20 sm:h-28" src="./images/logoInvert.png" alt="Logo"></img>
                    </Link>
                    <div className="flex w-full justify-center items-center mt-4 mb-8 font-bold font-poppins text-white text-5xl md:hidden pt-3 select-none">Sign Up</div>
                    <form className="max-w-[600px] min-w-[300px] sm:min-w-[450px]">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none font-poppins"
                                placeholder="Enter Your Full Name"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none font-poppins"
                                placeholder="Enter Mobile Number"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none font-poppins"
                                placeholder="Email Address"
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none font-poppins"
                                placeholder="Password"
                                autoComplete="true"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none font-poppins"
                                placeholder="Confirm Your Password"
                                autoComplete="true"
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-md leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full font-poppins"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            Sign Up
                        </button>

                        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5 font-poppins">
                            <p className="text-center font-semibold text-white mx-4 mb-0">OR</p>
                        </div>

                        <a
                            className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-[#3b5998] hover:bg-[#233e77] font-poppins"
                            href="#!"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            <svg viewBox="0 0 320 512" className="w-3.5 h-3.5 mr-2">
                                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                            </svg>
                            Continue with Facebook
                        </a>
                        <a
                            className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center bg-[#218bdc] hover:bg-[#0175ce] font-poppins"
                            href="#!"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            <svg viewBox="0 0 512 512" className="w-3.5 h-3.5 mr-2">
                                <path
                                    fill="currentColor"
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                />
                            </svg>
                            Continue with Twitter
                        </a>
                    </form>
                    <div className="text-white py-4 font-poppins">
                        Already A Member?{' '}
                        <Link to="/LogIn" className="text-blue-600 font-semibold hover:underline hover:underline-offset-2">
                            Log In
                        </Link>{' '}
                        Instead.
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between text-center md:text-left mt-4 pt-4 pb-6 border-t border-white text-white md:flex-row mx-10 md:hidden">
                <div className="flex flex-col md:flex-row items-center">
                    <p className="text-sm ">
                        © Copyright 2022. Built With 🤍 By{' '}
                        <a href="https://github.com/AdityaMayukhSom" className="text-yellow-500">
                            Aditya Mayukh Som
                        </a>
                        .
                    </p>
                    <p className="text-sm px-0 md:px-1 ">All Rights Reserved.</p>
                </div>
                <div className="flex items-center justify-center mt-4 space-x-4 sm:mt-0">
                    <a href="www.twitter.com" className="text-gray-400 transition-colors duration-300 hover:text-white">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                        </svg>
                    </a>
                    <a href="www.instagram.com" className="text-gray-400 transition-colors duration-300 hover:text-white">
                        <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                            <circle cx="15" cy="15" r="4" />
                            <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                        </svg>
                    </a>
                    <a href="www.facebook.com" className="text-gray-400 transition-colors duration-300 hover:text-white">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default SignUp;
