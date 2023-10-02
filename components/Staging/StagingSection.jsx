import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';

const StagingSection = () => {
    const { t } = useTranslation('staging');
    const router = useRouter();
    function formatParagraph(text) {
        // Split the text into sentences based on periods
        const sentences = text.split('.');

        // Join the sentences with a period and a new line
        const formattedText = sentences.join('.\n');

        return formattedText;
    }
    return (
        <div className="flex flex-col items-center justify-center  w-full h-[55rem]">
            <div className="relative md:w-[60%] w-[80%] h-[15%] flex items-center justify-center">
                <Image
                    src={t('imgInfo.frontImg3.src')}
                    alt={t('imgInfo.frontImg3.alt')}
                    loading="lazy"
                    quality={100}
                    fill
                    className="overflow-hidden absolute top-0 left-0 object-cover"
                />
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center md:w-[80%] w-full h-[75%]">
                <div className=" h-full w-full flex flex-col items-center mb-4">
                    <div className="w-[80%] h-[40%] relative">
                        <Image
                            className=" absolute top-0 left-0 w-full h-full object-cover object-top opacity-70"
                            src={t('imgInfo.frontImg1.src')}
                            alt={t('imgInfo.frontImg1.alt')}
                            fill
                        />
                    </div>
                    <div className="flex justify-center items-center w-[60%] h-[20%] mb-4 relative">
                        <div className="flex items-center justify-center">
                            <div className=" flex items-center justify-center w-[80%] h-[60%] dm-green-plant-solid-border-2 absolute  top-[30%]">
                                <p className="dm-black-text text-center">
                                    {t('title1')}
                                </p>
                            </div>
                            <div className="w-[60%] h-[80%] dm-green-plant-solid-border-2 absolute  top-[20%] md:block hidden"></div>
                        </div>
                    </div>

                    <div className="w-[80%] h-[40%] relative">
                        <Image
                            className=" absolute top-0 left-0  w-full h-full object-cover object-center opacity-70"
                            src={t('imgInfo.frontImg1.src')}
                            alt={t('imgInfo.frontImg1.alt')}
                            fill
                        />
                    </div>
                </div>
                <div className="h-[50%] w-full flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center m-8 w-[40%] h-[80%]">
                        <p className="dm-black-text text-center">
                            {formatParagraph(t('texto1'))}
                        </p>
                    </div>
                    <div className="flex justify-center items-center m-8">
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
            <div className="flex items-center justify-center m-8">
                <p className="dm-black-text">{t('texto2')}</p>
            </div>
        </div>
    );
};
export default StagingSection;
