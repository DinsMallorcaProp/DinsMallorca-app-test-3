import React from 'react';
import Image from 'next/image';

const OverImgBgImgT2 = ({ overImgUrl, overImgAlt, bgImgUrl, bgImgAlt }) => {
    const bgImage = bgImgUrl ? 'dm-bg-img-wrapper' : 'dm-hidden';
    return (
        <div className="dm-over-img-bg-img-container">
            <div className="z-[2] md:left-[20%] left-[10%] top-0 w-[70%] h-[80%] absolute">
                <Image
                    src={overImgUrl}
                    alt={overImgAlt}
                    className="w-full h-auto object-top object-contain opacity-80"
                    fill
                    loading="lazy"
                />
            </div>

            <div className={`${bgImage}`}>
                <Image
                    src={bgImgUrl}
                    alt={bgImgAlt}
                    className="dm-bg-img-t2"
                    fill
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default OverImgBgImgT2;
