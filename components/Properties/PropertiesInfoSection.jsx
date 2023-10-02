import React from 'react';
import { LeftRightImgCenterText } from 'components/index';
import { useTranslation } from 'next-i18next';

const PropertiesInfoSection = () => {
    const { t } = useTranslation('propertiesInfo');

    return (
        <section>
            <LeftRightImgCenterText
                text={t('text')}
                btnTitle={t('btn.title')}
                btnUrl={t('btn.url')}
                btnTarget={t('btn.target')}
                leftImg={t('leftSideImg.src')}
                leftImgAlt={t('leftSideImge.alt')}
                rightImg={t('rightSideImg.src')}
                rightImgAlt={t('rightSideImg.alt')}
            />
        </section>
    );
};

export default PropertiesInfoSection;
