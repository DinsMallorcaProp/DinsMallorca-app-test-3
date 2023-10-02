import React from 'react';
import { useTranslation } from 'next-i18next';
import { TitleTextBtnT2, OverImgBgImgT2 } from 'components/index';
const PropertiesForSearchSection = () => {
    const { t } = useTranslation('propertiesSearch');
    return (
        <section className="dm-properties-search-container">
            <div className="dm-section-wrapper">
                <OverImgBgImgT2
                    overImgUrl={t('leftSideImg.src')}
                    overImgAlt={t('leftSideImg.alt')}
                />
            </div>
            <div className="dm-section-wrapper">
                <TitleTextBtnT2
                    text={t('text')}
                    btnTitle={t('btn.title')}
                    btnUrl={t('btn.url')}
                    btnTarget={t('btn.target')}
                />
            </div>
        </section>
    );
};

export default PropertiesForSearchSection;
