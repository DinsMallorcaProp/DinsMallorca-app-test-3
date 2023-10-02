import React from 'react';
import { useRouter } from 'next/router';

const GlobalBtnLinkT1 = ({ title, param }) => {
    const router = useRouter();
    return (
        <div className="flex items-center justify-center">
            <button
                className="flex relative rounded overflow-hidden group bg-dmgreen-bg  hover:bg-gradient-to-r hover:from-dmgreen-bg hover:to-dmgreen-bg hover:ring-2 hover:ring-offset-2 hover:ring-dmgreen-border transition-all ease-out duration-300 border-2 border-dmgreen-border"
                onClick={function () {
                    router.push('/?parameter=advisor');
                }}
            >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-dmwhite opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative dm-black-text md:px-3 md:py-1.5 px-3 py-1.5">
                    {title}
                </span>
            </button>
        </div>
    );
};

export default GlobalBtnLinkT1;
