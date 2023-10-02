import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const StagingSection = () => {
    const { t } = useTranslation('staging');
    function formatParagraph(text) {
        // Split the text into sentences based on periods
        const sentences = text.split('.');

        // Join the sentences with a period and a new line
        const formattedText = sentences.join('.\n');

        return formattedText;
    }
    return (
        <div className="flex md:flex-row flex-col items-center justify-center  h-[60rem] md:w-[80] w-full relative">
            <div className="absolute top-0 md:left-[25%] left-[5%] md:h-[20%] h-[10%] md:w-[50%] w-[85%]">
                <Image
                    src={t('imgInfo.frontImg3.src')}
                    alt={t('imgInfo.frontImg3.alt')}
                    fill
                    className="w-full h-full object-cover opacity-80 object-center overflow-hidden"
                />
            </div>

            <div className=" flex flex-col absolute md:top-[25%] top-[15%] left-[10%] md:h-[60%] h-[50%] md:w-[60%] w-full">
                <div className="flex  md:w-[50%] w-full">
                    <div className="absolute top-0 md:left-[20%] left-0  md:w-[50%] w-[80%] h-[35%]">
                        <Image
                            src={t('imgInfo.frontImg1.src')}
                            alt={t('imgInfo.frontImg1.alt')}
                            fill
                            className="object-cover  opacity-60 object-top overflow-hidden"
                        />
                    </div>
                    <div className="absolute top-[35%] md:left-[20%] left-0 md:w-[50%] w-[80%] h-[30%]">
                        <div className="flex items-center justify-center w-[80%] h-[70%]  absolute top-[20%] left-[15%] p-5 z-[1] dm-green-plant-solid-border-2">
                            <p>{t('title1')}</p>
                        </div>
                        <div className="flex items-center justify-center w-[65%] h-full  absolute top-[5%] left-[23%] p-5 z-[1] dm-green-plant-solid-border-2"></div>
                    </div>
                    <div className="absolute top-[70%] md:left-[20%] left-0 md:w-[50%] w-[80%] h-[35%]">
                        <Image
                            src={t('imgInfo.frontImg1.src')}
                            alt={t('imgInfo.frontImg1.alt')}
                            fill
                            className="object-cover opacity-60 object-center overflow-hidden"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:w-[50%] w-full  md:h-[30%] h-[20%] absolute md:top-0 top-[98%] md:left-[55%] left-0">
                    <div className="absolute md:top-0 top-[98%] md:left-[80%] left-[10%]  w-[70%] md:h-[80%] h-[50%]">
                        <p>{formatParagraph(t('texto1'))}</p>
                    </div>

                    <div className="absolute md:top[80%] top-[50%] md:w-[50%] w-full md:h-[20%] h-[50%]">
                        <button
                            className="flex relative rounded overflow-hidden group bg-dmgreen-bg  hover:bg-gradient-to-r hover:from-dmgreen-bg hover:to-dmgreen-bg hover:ring-2 hover:ring-offset-2 hover:ring-dmgreen-border transition-all ease-out duration-300 border-2 border-dmgreen-border"
                            onClick={function () {
                                router.push('/?parameter=staging');
                            }}
                        >
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-dmwhite opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative dm-black-text md:px-3 md:py-1.5 px-3 py-1.5">
                                {t('btnText')}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute top-[95%] left-[30%]  w-[50%]">
                <p>{t('texto2')}</p>
            </div>
        </div>
    );
};
export default StagingSection;
