import React from 'react';
import Image from 'next/image';
import { GlobalBtnLinkT1 } from 'components/index';

const ImgTextBgImg = ({
    title,
    text,
    leftImg,
    leftImgAlt,
    rightImg,
    rightImgAlt,
    btnTitle,
    btnUrl,
    target
}) => {
    return (
        <div className="relative h-80 flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center dm-black-title">
                <h1>{title}</h1>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center h-full w-full">
                <div className="md:w-2/5 w-full h-full flex flex-col justify-center items-center relative z-10 sm:mt-16">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <Image
                            src={leftImg}
                            alt={leftImgAlt}
                            className="w-full md:h-auto dm-min-height-300 dm-image-filter-50 md:object-contain object-cover"
                            fill
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="md:w-1/5: w-full flex items-center dm-black-subtitle sm:mt-16">
                    <h3>{text}</h3>
                </div>
                <div className="md:w-2/5 w-full h-full flex flex-col justify-center items-center relative z-10">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <Image
                            src={rightImg}
                            alt={rightImgAlt}
                            className="w-full md:h-auton h-52- dm-image-filter-50 object-contain  rotate-12"
                            fill
                            loading="lazy"
                        />
                    </div>
                    <div className="dm-btns-wrapper">
                        <GlobalBtnLinkT1
                            title={btnTitle}
                            url={btnUrl}
                            target={target}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImgTextBgImg;
