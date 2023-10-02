import React from 'react';
import Image from 'next/image';

const ImageContainerTwoImages = ({ img1, alt1, img2, alt2 }) => {
    return (
        <div className="dm-img-card-container">
            <div className="dm-img-wrapper">
                <Image
                    src={img1}
                    alt={alt1}
                    loading="lazy"
                    quality={100}
                    fill
                    className="dm-img-top"
                />
            </div>
            <div className="dm-img-wrapper">
                <Image src={img2} alt={alt2} fill className="dm-img-bottom" />
            </div>
        </div>
    );
};

export default ImageContainerTwoImages;
