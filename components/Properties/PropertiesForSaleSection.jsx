import React from 'react';
import { useTranslation } from 'next-i18next';
import { TitleTextBtnT1, OverImgBgImgT1 } from 'components/index';
const PropertiesForSale = () => {
    const { t } = useTranslation('propertiesForSales');
    return (
        <section className="dm-section-container">
            <div className="dm-section-wrapper">
                <TitleTextBtnT1
                    text={t('text')}
                    btnTitle={t('btn.title')}
                    btnUrl={t('btn.url')}
                    btnTarget={t('btn.target')}
                />
            </div>
            <div className="dm-section-wrapper">
                <OverImgBgImgT1
                    overImgUrl={t('rightSideImg.src')}
                    overImgAlt={t('rightSideImg.alt')}
                    bgImgUrl={t('bgImg.src')}
                    bgImgAlt={t('bgImg.alt')}
                />
            </div>
        </section>
    );
};

export default PropertiesForSale;
