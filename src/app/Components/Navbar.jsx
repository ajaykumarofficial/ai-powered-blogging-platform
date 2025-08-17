"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white fixed w-full z-20 top-0 h-20 start-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" className="w-40" alt="AI Blog Logo" />
                </a>

                {/* Right section */}
                <div className="flex items-center space-x-2 md:order-2">
                    {/* Desktop only buttons */}
                    <div className="hidden md:flex space-x-2">
                        <button
                        onClick={() => router.push("/auth/sign-in")}
                            type="button"
                            className="text-white bg-brand hover:bg-brand focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
              text-sm px-4 py-2 text-center"
                        >
                            Sign In
                        </button>
                        <button
                        onClick={() => router.push("/auth/sign-up")}
                        type="button"
                            className="text-white bg-brand hover:bg-brand focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
              text-sm px-4 py-2 text-center"
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center 
            text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
            focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu links */}
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"
                        }`}
                >
                    <ul
                        className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 
            rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row 
            md:mt-0 md:border-0 md:bg-white"
                    >
                        <li>
                            <a
                                href="/"
                                className="block py-2 px-3 text-white bg-brand rounded-sm 
                md:bg-transparent md:text-brand md:p-0"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-brand md:p-0"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-brand md:p-0"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-brand md:p-0"
                            >
                                Contact
                            </a>
                        </li>

                        {/* Mobile-only login/signin */}
                        <li className="flex flex-col space-y-2 mt-4 md:hidden">
                            <button onClick={() => router.push("/auth/sign-in")} className="w-full text-white bg-brand hover:bg-brand focus:ring-4 
                focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                text-sm px-4 py-2 text-center">
                                Sign In
                            </button>
                            <button
                        onClick={() => router.push("/auth/sign-up")}
                        className="w-full text-white bg-brand hover:bg-brand focus:ring-4 
                focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                text-sm px-4 py-2 text-center">
                                Sign Up
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
