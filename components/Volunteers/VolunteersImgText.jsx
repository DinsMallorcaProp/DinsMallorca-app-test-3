import React from 'react';
import Image from 'next/image';

const VolunteersImgText = ({ imgUrl, imgAlt, title, imgWrapper, imgClass }) => {
    return (
        <div className="flex flex-col justify-center items-center  w-full md:h-[40rem] h-[30rem]">
            <div className="m-8">
                <h2 className="dm-black-title bold">{title}</h2>
            </div>
            <div className={`${imgWrapper}`}>
                <Image
                    src={imgUrl}
                    alt={imgAlt}
                    className={`${imgClass}`}
                    fill
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default VolunteersImgText;
