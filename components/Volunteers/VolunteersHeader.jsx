import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const VolunteersHeader = ({ button }) => {
    const router = useRouter();
    const { t } = useTranslation('volunteersInfo');
    const hiddenBtn = !button ? 'dm-hidden' : '';
    return (
        <section>
            <div className="flex flex-col justify-center items-center  w-full h-[55rem] relative">
                <div>
                    <div className="absolute md:top-[10%] top-[5%] md:left-[20%] left-0 md:w-[60%] w-full  md:h-[60%] h-[80%]">
                        <Image
                            src={t('backLogoImg.url')}
                            alt={t('backLogoImg.alt')}
                            className="w-full h-full md:object-cover object-contain opacity-40 object-top overflow-hidden"
                            fill
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="flex md:flex-row flex-col items-center justify-start md:w-[80%] w-full md:h-[80%] h-[90%] relative">
                    <div className="flex flex-col relative md:w-[60%] w-full md:h-[60%] h-[45%]">
                        <div className="dm-box-2-w-60-h-40">
                            <p>{t('mainTitle')}</p>
                        </div>
                        <div className="dm-box-1-w-50-h-60"></div>
                    </div>

                    <div className="md:w-[50%] h-[50%] w-full absolute md:top-[5%] top-[40%] md:left-[50%]">
                        <Image
                            src={t('imgsInfo.frontRecycleImg.url')}
                            alt={t('imgsInfo.frontRecycleImg.alt')}
                            className="  object-contain opacity-80 object-top overflow-hidden"
                            fill
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center absolute md:top-[44rem] top-[46rem]">
                    <div className="flex flex-col justify-center items-center  w-[60%]">
                        <p className="dm-black-text m-4">{t('mainText')}</p>
                    </div>
                    <div>
                        <h3 className="dm-black-subtitle">{t('subtitle')}</h3>
                    </div>
                    <div
                        className={`${hiddenBtn} 'flex justify-center items-center'`}
                    >
                        <div className="flex items-center justify-center m-4">
                            <button
                                className="flex relative rounded overflow-hidden group bg-dmgreen-bg  hover:bg-gradient-to-r hover:from-dmgreen-bg hover:to-dmgreen-bg hover:ring-2 hover:ring-offset-2 hover:ring-dmgreen-border transition-all ease-out duration-300 border-2 border-dmgreen-border"
                                onClick={function () {
                                    router.push('/?parameter=volunteers');
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
            </div>
        </section>
    );
};

export default VolunteersHeader;
