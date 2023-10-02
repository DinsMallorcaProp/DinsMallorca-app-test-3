import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SRBPropertiesHeader = () => {
    const { t } = useTranslation('srbpropiedadeshome');
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex md:flex-row flex-col w-[99%] md:h-[35rem] h-[44rem]">
                <div className="relative md:w-[50%] w-full h-full">
                    <div className="absolute w-full h-full md:top-[10%] top-[30%] md:left-[10%] left-0">
                        <Image
                            src={t('imgsInfo.frontImg1.src')}
                            alt={t('imgsInfo.frontImg1.alt')}
                            fill
                            className="object-contain opacity-60"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:w-[50%] w-full h-full">
                    <div className="relative w-full h-[70%]">
                        <div className="absolute w-[60%] h-[40%] top-[48%]  md:left-[5%] left-[15%] dm-green-plant-solid-border-2">
                            <div className="absolute top-[45%] left-[25%]">
                                <p className="dm-black-text text-center">
                                    {t('title')}
                                </p>
                            </div>
                        </div>
                        <div className="absolute w-[50%] h-[60%] top-[40%] md:left-[11%] left-[20%] dm-green-plant-solid-border-2"></div>
                    </div>
                    <div className="flex justify-center items-center md:w-[80%] w-full h-[30%]">
                        <p className="dm-black-text text-center">
                            {t('text1')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative w-[99%] md:h-[30rem] h-[20rem]">
                <div className="absolute w-[99%] h-[90%]  top-0 left-0">
                    <Image
                        src={t('imgsInfo.backImg1.src')}
                        alt={t('imgsInfo.backImg1.alt')}
                        fill
                        className="md:object-cover object-contain opacity-60"
                    />
                </div>
                <div className="absolute md:w-[60%] w-full h-[30%]  top-[30%] md:left-[20%] left-[5%]">
                    <Image
                        src={t('imgsInfo.frontImg2.src')}
                        alt={t('imgsInfo.frontImg2.alt')}
                        fill
                        className="object-cover object-center "
                    />
                </div>
            </div>
            <div className="flex items-center justify-end w-[80%] h-[10rem]">
                <p className="dm-black-text text-center">{t('text2')}</p>
            </div>
            <div className="flex items-center justify-end w-[70%] h-[10rem]">
                <p className="dm-black-text text-center">{t('text3')}</p>
            </div>
            <div className="flex items-center justify-center w-[70%] h-[10rem]">
                <p className="w-[30%] dm-black-text text-center">
                    {t('text4')}
                </p>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center w-full h-[20rem]">
                <div className="flex items-center justify-center md:w-[50%] w-full h-full">
                    <p className="w-[30%] dm-black-text text-center">
                        {t('text4')}
                    </p>
                </div>
                <div className="flex col items-center justify-center md:w-[50%] w-full h-full relative">
                    <div className="absolute top-0 right-0 w-full h-full z-[-1]">
                        <Image
                            src={t('imgsInfo.backImg2.src')}
                            alt={t('imgsInfo.backImg2.alt')}
                            fill
                            className=" object-contain opacity-60 rotate-45"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="m-2">
                            <p className="dm-black-text text-center">
                                {t('text6')}
                            </p>
                        </div>

                        <div className="m-2">
                            <button
                                className="flex relative rounded overflow-hidden group bg-dmgreen-bg  hover:bg-gradient-to-r hover:from-dmgreen-bg hover:to-dmgreen-bg hover:ring-2 hover:ring-offset-2 hover:ring-dmgreen-border transition-all ease-out duration-300 border-2 border-dmgreen-border"
                                onClick={function () {
                                    router.push('/?parameter=advisor');
                                }}
                            >
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-dmwhite opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative dm-black-text md:px-3 md:py-1.5 px-3 py-1.5">
                                    {t('btnText1')}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SRBPropertiesHeader;
