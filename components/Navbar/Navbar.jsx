import { LocaleSwitcher, Menu } from 'components/index';
import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="dm-navbar-wrapper">
                <div className="dm-navbar-menu-wrapper">
                    {/* Left Section: Four Menu Options */}
                    <div className="md-navbar-menu-web md:block hidden dm-black-subtitle">
                        <Menu />
                    </div>
                    {/* Mobile Menu (hidden by default) */}
                    {isOpen && (
                        <div className="md-navbar-menu-web w-full  absolute top-[80px] bg-dmgreen-olive md:hidden opacity-90">
                            <Menu />
                        </div>
                    )}
                </div>
                <div className="md-navbar-icons-wrapper">
                    <div>
                        <button className="dm-hamburger" onClick={toggleMenu}>
                            {/* icon from Heroicons.com */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="white"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    <div>
                        <LocaleSwitcher />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
