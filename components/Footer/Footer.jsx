import React from 'react';
import { useTranslation } from 'next-i18next';
import { SocialMediaIcons, WhatsApp } from 'components/index';
import Image from 'next/image';
import { SocialMediaList } from 'constants/SocialMediaList.js';

const Footer = () => {
    const { t } = useTranslation('location');
    return (
        <footer className="dm-flex-col-full-container">
            <div className="dm-img-bg-wrapper">
                {/*    <Image
                    src={t('bgImg1.url')}
                    alt={t('bgImg1≈.alt')}
                    className="dm-img-bg-fit-cover"
                    fill
                    loading="lazy"
                /> */}
            </div>
            <SocialMediaIcons />
            <div className="dm-flex-between-full-wrapper">
                <div className="dm-logo-img-wrapper">
                    {/*      <Image
                        src={t('logoImg.url')}
                        alt={t('logoImg.alt')}
                        className="dm-logo-img-fit-contain"
                        fill
                        loading="lazy"
                    /> */}
                </div>

                <div className="dm-location-wrapper">
                    <p className="dm-black-text font-semibold">
                        {t('address.street')}
                    </p>
                    <p className="dm-black-text font-semibold">
                        {t('address.zipCode')}{' '}
                    </p>
                    <p className="dm-black-text font-semibold">
                        {t('address.city')}{' '}
                    </p>
                    <p className="dm-black-text font-semibold">
                        {t('address.country')}
                    </p>
                    <p className="dm-black-text font-semibold">
                        {t('contact.email')}
                    </p>
                    <p className="dm-black-text font-semibold">
                        {' '}
                        {t('contact.cell')}
                    </p>
                    <p className="dm-black-text font-semibold">
                        {t('workingHours.days')} ~ {t('workingHours.hours')}
                    </p>
                    <WhatsApp
                        size={20}
                        href={SocialMediaList.WhatsApp.href}
                        target={SocialMediaList.WhatsApp.target}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
