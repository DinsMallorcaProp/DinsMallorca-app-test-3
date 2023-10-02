import React from 'react';
import Image from 'next/image';

const TitleImgText = ({ title, imgUrl, imgAlt, text, imagClass }) => {
    const imgClassWrapper = imgUrl ? 'dm-titimg-wrapper' : 'dm-hidden';
    const textClassWrapper = text ? 'dm-titext-wrapper' : 'dm-hidden';
    const titleClassWrapper = title ? 'dm-tititle-wrapper' : 'dm-hidden';

    return (
        <div className="flex flex-col justify-center items-center w-[98%] h-[600px] mb-4 relative">
            <div className={`${titleClassWrapper}`}>
                <h1 className="dm-blue-subtitle bold">{title}</h1>
            </div>
            <div className={`${imgClassWrapper}`}>
                <div className="absolute md:w-[80%] w-[80%] md:h-[60%] h-full md:top-[30%] top-[35%]">
                    <Image
                        src={imgUrl}
                        alt={imgAlt}
                        className={`${imagClass}`}
                        fill
                        loading="lazy"
                    />
                </div>
            </div>

            <div className={`${textClassWrapper}`}>
                <p className="dm-black-text bold">{text}</p>
            </div>
        </div>
    );
};

export default TitleImgText;
