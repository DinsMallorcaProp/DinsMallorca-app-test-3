import React from 'react';
import Image from 'next/image';

const BackCoverImage = ({ imgUrl, imgAlt }) => {
    return (
        <div className="absolute top-[15%]  md:left-[20%] left-[10%] md:w-[60%] w-[80%]  md:h-[60%] h-[80%]">
            <Image
                src={imgUrl}
                alt={imgAlt}
                className="w-full h-full md:object-cover object-contain opacity-40 object-top overflow-hidden"
                fill
                loading="lazy"
            />
        </div>
    );
};

export default BackCoverImage;
