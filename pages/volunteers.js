import React from 'react';
import { useTranslation } from 'next-i18next';
import {
    EventsCalendar,
    VolunteersContact,
    TitleImgText,
    VolunteersImgText,
    VolunteersHeader
} from 'components/index';

const volunteers = () => {
    const { t } = useTranslation('volunteersInfo');
    const imgWrapper = 'relative md:w-[70%] w-[90%] h-full';
    const imgClass =
        'absolute top-1 left-1 object-cover object-center opacity-70';
    const imgWrapper1 = 'relative md:w-[80%] w-[90%] h-full';
    const imgClass1 =
        'absolute top-1 left-1 object-contain object-center opacity-80';

    return (
        <div>
            <VolunteersHeader />
            <VolunteersImgText
                title={t('imgsInfo.title1')}
                imgUrl={t('imgsInfo.frontImg1.url')}
                imgAlt={t('imgsInfo.frontImg1.alt')}
                imgWrapper={imgWrapper}
                imgClass={imgClass}
            />
            <VolunteersImgText
                title={t('imgsInfo.title2')}
                imgUrl={t('imgsInfo.frontImg2.url')}
                imgAlt={t('imgsInfo.frontImg2.alt')}
                imgWrapper={imgWrapper}
                imgClass={imgClass}
            />
            <VolunteersImgText
                title={t('imgsInfo.title3')}
                imgUrl={t('imgsInfo.frontImg3.url')}
                imgAlt={t('imgsInfo.frontImg3.alt')}
                imgWrapper={imgWrapper1}
                imgClass={imgClass1}
            />
            <EventsCalendar />
            <VolunteersContact />
        </div>
    );
};

export default volunteers;
