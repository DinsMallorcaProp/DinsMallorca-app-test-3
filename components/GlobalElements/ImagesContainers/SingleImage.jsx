import React from 'react';
import Image from 'next/image';

const SingleImage = ({ imgUrl, imgAlt, classImageContainer, classImage }) => {
    return (
        <div className={`${classImageContainer}`}>
            <div className="flex flex-col items-center justify-center w-full h-full relative">
                <div className="absolute w-[50%] h-[50%] top-[30%] left-[60%]">
                    <Image
                        src={imgUrl}
                        alt={imgAlt}
                        className={`${classImage}`}
                        fill
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleImage;
