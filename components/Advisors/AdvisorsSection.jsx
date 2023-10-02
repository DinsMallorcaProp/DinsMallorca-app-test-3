import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
const AdvisorsSection = () => {
    const { t } = useTranslation('advisorsInfo');
    const router = useRouter();
    const property = () => {
        return data.filter((item) => item.category === category);
    };
    return (
        <section>
            <div className="relative h-80 flex flex-col items-center justify-center ">
                <div className="flex items-center justify-center dm-black-title">
                    <h1>{t('title')}</h1>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-center h-full w-full">
                    <div className="md:w-2/5 w-full h-full flex flex-col justify-center items-center relative z-10 sm:mt-16">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <Image
                                src={t('imageLeftSide.url')}
                                alt={t('imageLeftSide.alt')}
                                className="w-full md:h-auto dm-min-height-300 dm-image-filter-50 md:object-contain object-cover"
                                fill
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/5: w-full flex items-center dm-black-subtitle sm:mt-16">
                        <h3>{t('texto')}</h3>
                    </div>
                    <div className="md:w-2/5 w-full h-full flex flex-col justify-center items-center relative z-10">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <Image
                                src={t('imageRightSide.url')}
                                alt={t('imageRightSide.alt')}
                                className="w-full md:h-auton h-52- dm-image-filter-50 object-contain  rotate-12"
                                fill
                                loading="lazy"
                            />
                        </div>
                        <div className="dm-btns-wrapper">
                            <div className="flex items-center justify-center">
                                <button
                                    className="flex relative rounded overflow-hidden group bg-dmgreen-bg  hover:bg-gradient-to-r hover:from-dmgreen-bg hover:to-dmgreen-bg hover:ring-2 hover:ring-offset-2 hover:ring-dmgreen-border transition-all ease-out duration-300 border-2 border-dmgreen-border"
                                    onClick={function () {
                                        router.push('/?parameter=advisor');
                                    }}
                                >
                                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-dmwhite opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative dm-black-text md:px-3 md:py-1.5 px-3 py-1.5">
                                        {t('button.title')}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvisorsSection;
