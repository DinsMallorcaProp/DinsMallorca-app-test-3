import React from 'react';
import { useTranslation } from 'next-i18next';
import { TitleTextBtnT2, TwoVerticalImgs } from 'components/index';

const PropertiesForRentSection = () => {
    const { t } = useTranslation('propertiesForRent');
    return (
        <section className="dm-section-container">
            <div className="dm-section-wrapper">
                <TitleTextBtnT2
                    text={t('text')}
                    btnTitle={t('btn.title')}
                    btnUrl={t('btn.url')}
                    btnTarget={t('btn.target')}
                />
            </div>
            <div className="dm-section-wrapper">
                <TwoVerticalImgs
                    img1={t('rightSideImg.src')}
                    alt1={t('rightSideImg.alt')}
                />
            </div>
        </section>
    );
};

export default PropertiesForRentSection;
