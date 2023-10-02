import React from 'react';
import Image from 'next/image';

const OverImgBgImgT1 = ({ overImgUrl, overImgAlt, bgImgUrl, bgImgAlt }) => {
    const bgImage = bgImgUrl ? 'dm-bg-img-t1-wrapper' : 'dm-hidden';
    return (
        <div className="dm-over-img-bg-img-container">
            <div className="dm-over-img-t1-wrapper">
                <Image
                    src={overImgUrl}
                    alt={overImgAlt}
                    className="dm-over-img-t1"
                    fill
                    loading="lazy"
                />
            </div>

            {/*  <div className={`${bgImage}`}>
                <Image
                    src={bgImgUrl}
                    alt={bgImgAlt}
                    className="dm-bg-img-t1"
                    fill
                    loading="lazy"
                />
            </div> */}
        </div>
    );
};

export default OverImgBgImgT1;
