import { React, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { ReviewAnimatedSlider } from 'components/index';
import GoogleWord from './GoogleWord';

const Reviews = () => {
    const { t } = useTranslation('reviews');
    return (
        <section className=" w-full flex flex-col  justify-center mt-16">
            <div className="flex md:flex-row flex-col items-center w-full">
                <div className="dm-img-side-w-25-h-300  md:block hidden">
                    <Image
                        src={t('reviews.bgImage.url')}
                        alt={t('reviews.bgImage.alt')}
                        className="dm-image-contain dm-image-rotate-180"
                        fill
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col justify-center items-center relative md:w-3/5 w-full h-28 dm-green-plant-solid-border-2 p-5 dm-width-98-porc">
                    <div>
                        <p className="dm-black-subtitle font-bold">
                            {t('reviews.title')}
                        </p>
                    </div>
                    <div className="absolute top-full flex items-center">
                        <GoogleWord />
                    </div>
                </div>
                <div className="dm-img-side-w-25-h-300  md:block hidden">
                    <Image
                        src={t('reviews.bgImage.url')}
                        alt={t('reviews.bgImage.alt')}
                        className="dm-image-contain"
                        fill
                        loading="lazy"
                    />
                </div>
            </div>
            <div>
                <ReviewAnimatedSlider/>
            </div>
        </section>
    );
};

export default Reviews;
