import '../css/tailwind.min.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [state, setState] = useState(false);
    const openModal = () => {
        if (state === false) {
            setState(true);
        } else {
            setState(false);
        }
    };
    return (
        <nav className="">
            <div className="flex flex-row justify-between px-6 md:px-10 items-center pb-2 text-xl">
                <Link to="/" className="h-20">
                    <img className="h-full" src="./images/logo.jpg" alt="Logo"></img>
                </Link>
                <div className="hidden md:block">
                    <ul className="flex flex-row space-x-4">
                        <li className="">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="">
                            <Link to="/Men">Men</Link>
                        </li>
                        <li className="">
                            <Link to="/Women">Women</Link>
                        </li>
                        <li className="">
                            <Link to="/About">About</Link>
                        </li>
                        <li className="">
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:block">
                    <div className="space-x-6 flex flex-row items-center">
                        <button className="h-6 cursor-pointer">
                            <img src="./images/search.svg" alt="Search" className="h-full" />
                        </button>
                        <Link to="/Cart" className="h-6 cursor-pointer">
                            <img src="./images/shoppingCart.svg" alt="Cart" className="h-full" />
                        </Link>
                        <button className="h-8 cursor-pointer">
                            <img src="./images/avatar.svg" alt="Avatar" className="h-full" />
                        </button>
                    </div>
                </div>

                <div className="inline-block md:hidden h-8 w-8 cursor-pointer" onClick={() => openModal()}>
                    <img src="./images/threeLine.png" alt="" className="h-full w-full" />
                </div>
            </div>

            <div className={state ? '' : 'hidden'}>
                <div className="inset-0 z-40 fixed">
                    <div className="absolute bg-gray-700 inset-0 opacity-75" onClick={() => openModal()}></div>
                    <div className="absolute inset-0 w-1/2 min-w-[230px] sm:min-w-[300px] bg-[#fff] shadow-lg h-full pt-4 flex flex-col">
                        <Link to="/" className="flex justify-center">
                            <img className="h-24 sm:h-36" src="./images/logo.jpg" alt="Logo"></img>
                        </Link>
                        <ul className="flex flex-col px-8 py-5 text-xl">
                            <Link to="/">
                                <li className="hover:bg-gray-100 p-3">Home</li>
                            </Link>
                            <Link to="/Men">
                                <li className="hover:bg-gray-100 p-3">Men</li>
                            </Link>
                            <Link to="/Women">
                                <li className="hover:bg-gray-100 p-3">Women</li>
                            </Link>
                            <Link to="/About">
                                <li className="hover:bg-gray-100 p-3">About</li>
                            </Link>
                            <Link to="/Contact">
                                <li className="hover:bg-gray-100 p-3">Contact</li>
                            </Link>
                            <Link to="/Cart">
                                <li className="hover:bg-gray-100 p-3">Cart</li>
                            </Link>
                        </ul>

                        <div className="w-full px-8 mt-auto">
                            <p className="text-lg">Get In Touch</p>
                            <p className="my-1 text-sm">
                                Write Us On{' '}
                                <Link to="/Contact" className="text-blue-800">
                                    hello@fashionstore.com
                                </Link>
                            </p>
                            <div className="h-6 flex flex-row justify-evenly my-4 mx-auto max-w-[220px]">
                                <img src="./images/facebook.svg" alt="" className="h-full" />
                                <img src="./images/instagram.svg" alt="" className="h-full" />
                                <img src="./images/linkedin.svg" alt="" className="h-full" />
                                <img src="./images/twitter.svg" alt="" className="h-full" />
                            </div>
                            <div className="text-center text-xs text-grey-400 border-gray-300 border-t-2 pt-2 pb-3">&copy; 2022 All rights reserved</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
