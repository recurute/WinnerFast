import React from 'react';
import Logo from "../../assets/Logos/LogoWinnerFast";

const Footer = () => {
    return (
        <footer className="py-16 px-8 bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-4">

                {/* Brand Section */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-xl">
                        <Logo />
                    </div>
                    <p className="text-black">Track and Grow your business with WinnerFast</p>
                    <p className="text-black text-sm">Copyright © 2024 - All rights reserved</p>
                </div>

                {/* Links Section */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-orange-600 font-medium">Main menu</h3>
                    <div className="flex flex-col gap-2">
                        <a href="/login" className="text-black text-sm hover:text-gray-500 transition">Home</a>
                        <a href="/login" className="text-black text-sm hover:text-gray-500 transition">Log in</a>
                        <a href="/contact" className="text-black text-sm hover:text-gray-500 transition">Contact-us</a>
                        <a href="/affiliate" className="text-black text-sm hover:text-gray-500 transition">Affiliate program</a>
                    </div>
                </div>

                {/* Legal Section */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-orange-600 font-medium">Help</h3>
                    <div className="flex flex-col gap-2">
                        <a href="/terms" className="text-black text-sm hover:text-gray-500 transition">Terms of services</a>
                        <a href="/privacy" className="text-black text-sm hover:text-gray-500 transition">Privacy policy</a>
                        <a href="/faqs" className="text-black text-sm  hover:text-gray-500 transition">FAQs</a>
                    </div>
                </div>

                {/* Signup Form Section */}
                <div className="flex flex-col gap-4">
                    <form className="flex flex-col items-stretch justify-start gap-2 p-4">
                        <fieldset className="contents">
                            <p className="text-lg text-center">✨</p>
                            <p className=" mx-auto font-medium text-center text-gray-800">
                                Be the first to know about <strong className="font-bold">new features and exclusive offers</strong>!
                            </p>
                            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="Enter your email..."
                                    className="placeholder-orange-600 rounded-lg px-3 py-2 bg-white border-2 border-solid border-orange-600 font-mono font-medium text-sm"
                                />
                                <button
                                    type="submit"
                                    className="rounded-lg px-3 py-2 bg-orange-600 border-2 border-solid border-orange-600 text-lime-50 transition-colors hover:bg-orange-600 hover:shadow-md hover:shadow-gray-600 font-medium text-base flex flex-row items-center justify-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Join now!</span>
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
