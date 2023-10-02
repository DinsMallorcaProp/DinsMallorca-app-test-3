import React from 'react';
import Image from 'next/image';

const TwoVerticalImgs = ({ img1, alt1, img2, alt2 }) => {
    return (
        <div className="dm-above-img-below-img-container">
            <div className="dm-above-img-t1-wrapper">
                <Image
                    src={img1}
                    alt={alt1}
                    className="dm-above-below-img-t1"
                    fill
                    loading="lazy"
                />
            </div>
            {/* <div className="dm-hidden">
                <Image
                    src={img2}
                    alt={alt2}
                    className="dm-above-below-img-t1"
                    fill
                    loading="lazy"
                />
            </div> */}
        </div>
    );
};

export default TwoVerticalImgs;
