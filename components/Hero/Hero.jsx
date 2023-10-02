import React from 'react';
import { ImgContainerTwoImgs } from 'components/index';
import { useTranslation } from 'next-i18next';

const Hero = () => {
    const { t } = useTranslation('hero');
    return (
        <section>
            {
                <ImgContainerTwoImgs
                    img1={t('heroLogo.url')}
                    alt1={t('heroLogo.alt')}
                    img2={t('heroImage.url')}
                    alt2={t('heroImage.alt')}
                />
            }
        </section>
    );
};
export default Hero;
