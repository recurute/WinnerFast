import {Link} from "react-router-dom"
import { useState } from "react";
import LogoWinnerFast from "../../assets/Logos/LogoWinnerFast";
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const ChecktheScroll=()=>{
        console.log('heey')
    }
    return (
        <>
        <nav className="navbar bg-white rounded-b-2xl fixed top-[0.01%] shadow-md flex w-full z-30 max-sm:justify-between sm:max-xl:justify-between max-xl:flex-col sm:max-xl:px-[3%] max-sm:flex-col max-sm:px-[3%]">
            <Link to='' className="Logo py-[1.5%] w-[23%] flex justify-center ">
            <LogoWinnerFast/>
            </Link>

            <div className={`NavbarLinks flex-grow w-full block  xl:w-auto  xl:flex xl:items-center justify-evenly max-xl:flex-col bg-rosa-200  ${isMenuOpen ? '' : 'hidden'} xl:block`}>
                    <div className="NavbarLinks_menu  max-sm:block sm:max-xl:block   w-[80%] mt-[1%] flex gap-[1.25%] xl:justify-evenly sm:max-xl:pb-[1%]">
                        <Link to="/" className="hover:shadow-md   rounded-md Text-navbar-element block text-xl xl:inline-block xl:mt-0 text-orange-600 font-semibold max-xl:w-[100%] max-xl:border-y-2 max-xl:border-rose-100 max-sm:text-lg max-xl:text-md max-sm:rounded-none" onClick={closeMenu}>
                                Home
                        </Link>
                        <Link onClick={ChecktheScroll} to="#faqs" className=" hover:shadow-md  rounded-md Text-navbar-element block text-xl xl:inline-block xl:mt-0 text-orange-600   font-semibold max-xl:w-[100%] max-xl:border-b-2 max-xl:border-rose-100 max-sm:text-lg  max-xl:text-md max-sm:rounded-none" onClick={closeMenu}>
                            FAQ
                        </Link>

                        <Link to="/" className="  hover:shadow-md   rounded-md Text-navbar-element block text-xl xl:inline-block xl:mt-0 text-orange-600 font-semibold max-xl:w-[100%] max-xl:border-b-2 max-xl:border-rose-100 max-sm:text-lg  max-xl:text-md max-sm:rounded-none" onClick={closeMenu}>
                            Pricing                  
                        </Link>
                        <Link to="/contactus" className="  hover:shadow-md   rounded-md Text-navbar-element block text-xl xl:inline-block xl:mt-0 text-orange-600 font-semibold max-xl:w-[100%] max-xl:border-b-2 max-xl:border-rose-100 max-sm:text-lg  max-xl:text-md max-sm:rounded-none" onClick={closeMenu}>
                            Contact Us                  
                        </Link>
                    </div>
                    <div className="mt-3">
                      <button  type="button" className="text-lime-50 bg-orange-600 hover:bg-lime-50 hover:text-orange-600 focus:ring-4 focus:ring-organe-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-600 ">Ask for demo</button>
                    </div>



            </div>
            <div className="block xl:hidden py-[4%] max-xl:absolute sm:max-xl:right-[2%] sm:max-xl:top-[-3%] max-sm:absolute max-sm:right-[2%] ">
                    <button data-cyp="menu-toggle" id="menu" onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded border-rose-600 hover:text-rose-600 hover:border-rose-400">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
            </div>

        </nav>
        </>
    )
}