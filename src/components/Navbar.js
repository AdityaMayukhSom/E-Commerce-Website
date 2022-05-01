import '../css/tailwind.min.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const navBarItemsClass = `hover:text-gray-400`;

    const [state, setState] = useState(false);
    const openModal = () => {
        if (state === false) {
            setState(true);
        } else {
            setState(false);
        }
    };
    return (
        <nav className="bg-[#151515]">
            <div className="grid grid-cols-2 md:grid-cols-[20%_50%_30%] lg:grid-cols-[25%_50%_25%] w-full px-4 md:px-4 items-center pb-2 text-xl text-white">
                <Link to="/" className="h-20 w-fit py-2 ml-2 flex justify-start">
                    <img className="h-full" src="./images/logoInvert.png" alt="Logo"></img>
                </Link>
                <div className="hidden md:flex flex-row justify-center ">
                    <ul className="flex flex-row space-x-4">
                        <li className="">
                            <Link to="/" className={navBarItemsClass}>
                                Home
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/Men" className={navBarItemsClass}>
                                Men
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/Women" className={navBarItemsClass}>
                                Women
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/About" className={navBarItemsClass}>
                                About
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/Contact" className={navBarItemsClass}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:flex justify-end">
                    <div className="space-x-4 flex flex-row items-center">
                        {/* <button className="h-6 cursor-pointer">
                            <img src="./images/search.svg" alt="Search" className="h-full" />
                        </button> */}
                        <Link to="/Cart" className="h-6 cursor-pointer">
                            <img src="./images/shoppingCart.svg" alt="Cart" className="h-full" />
                        </Link>
                        <Link
                            to="/SignUp"
                            className="h-6 px-3 flex cursor-pointer bg-[#da9e1c] text-black font-bold  rounded shadow-md hover:bg-[#f2bc3f] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#f2bc3f] active:shadow-lg transition duration-150 ease-in-out py-4 text-xs items-center justify-center uppercase"
                        >
                            {/* <img src="./images/avatar.svg" alt="Avatar" className="h-full" /> */}
                            Sign Up
                        </Link>
                        <Link
                            to="/LogIn"
                            className="h-6 px-3 flex cursor-pointer bg-[#da9e1c] text-black font-bold  rounded shadow-md hover:bg-[#f2bc3f] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#f2bc3f] active:shadow-lg transition duration-150 ease-in-out py-4 text-xs items-center justify-center uppercase"
                        >
                            Log In
                        </Link>
                    </div>
                </div>

                <div className="ml-auto md:hidden h-8 w-8 cursor-pointer" onClick={() => openModal()}>
                    <img src="./images/threeLine.png" alt="" className="h-full w-full invert" />
                </div>
            </div>

            <div className={state ? '' : 'hidden'}>
                <div className="inset-0 z-40 fixed ">
                    <div className="absolute bg-gray-700 inset-0 opacity-75" onClick={() => openModal()}></div>
                    <div className="absolute inset-0 w-1/2 min-w-[250px] sm:min-w-[300px] bg-[#191919] shadow-lg h-full pt-4 flex flex-col">
                        <Link to="/" className="flex justify-center mt-2">
                            <img className="h-16 sm:h-24" src="./images/logoInvert.png" alt="Logo"></img>
                        </Link>
                        <ul className="flex flex-col px-6 py-4 text-base">
                            <Link to="/">
                                <li className="hover:bg-[#252525] px-3 py-2 ">Home</li>
                            </Link>
                            <Link to="/Men">
                                <li className="hover:bg-[#252525] px-3 py-2 ">Men</li>
                            </Link>
                            <Link to="/Women">
                                <li className="hover:bg-[#252525] px-3 py-2 ">Women</li>
                            </Link>
                            <Link to="/About">
                                <li className="hover:bg-[#252525] px-3 py-2 ">About</li>
                            </Link>
                            <Link to="/Contact">
                                <li className="hover:bg-[#252525] px-3 py-2 ">Contact</li>
                            </Link>
                            <Link to="/Cart">
                                <li className="hover:bg-[#252525] px-3 py-2 ">Cart</li>
                            </Link>
                            <Link
                                to="/SignUp"
                                className="h-6 px-3 mt-2 mb-3 flex cursor-pointer bg-[#da9e1c] text-black font-bold  rounded shadow-md hover:bg-[#f2bc3f] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#f2bc3f] active:shadow-lg transition duration-150 ease-in-out py-5 text-sm items-center justify-center uppercase"
                            >
                                {/* <img src="./images/avatar.svg" alt="Avatar" className="h-full" /> */}
                                Sign Up
                            </Link>
                            <Link
                                to="/LogIn"
                                className="h-6 px-3 flex cursor-pointer bg-[#da9e1c] text-black font-bold  rounded shadow-md hover:bg-[#f2bc3f] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#f2bc3f] active:shadow-lg transition duration-150 ease-in-out py-5 text-sm items-center justify-center uppercase"
                            >
                                Log In
                            </Link>
                        </ul>

                        <div className="w-full px-8 mt-auto">
                            <p className="text-lg">Get In Touch</p>
                            <p className="my-1 text-sm">
                                Write&nbsp;Us&nbsp;On
                                <br />
                                <Link to="/Contact" className="text-blue-500">
                                    hello@fashionstore.com
                                </Link>
                            </p>
                            <div className="h-8 flex flex-row justify-evenly my-4 mx-auto max-w-[220px]">
                                <img src="./images/facebook.svg" alt="" className="h-6  invert cursor-pointer mt-2 hover:mt-1 transition-all" />
                                <img src="./images/instagram.svg" alt="" className="h-6 invert cursor-pointer mt-2 hover:mt-1 transition-all" />
                                <img src="./images/linkedin.svg" alt="" className="h-6 invert cursor-pointer mt-2 hover:mt-1 transition-all" />
                                <img src="./images/twitter.svg" alt="" className="h-6 invert cursor-pointer mt-2 hover:mt-1 transition-all" />
                            </div>
                            <div className="text-center text-xs text-grey-400 border-yellow-500 border-t-2 pt-2 pb-3">&copy; 2022 All rights reserved</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
