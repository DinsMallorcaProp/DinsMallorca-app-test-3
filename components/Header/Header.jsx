import React from 'react';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
const Header = () => {
    const { t } = useTranslation('header');
    return (
        <div>
            <Head>
                <title>{t('title')}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name={t('metas.name')} content={t('metas.content')} />
                <link rel={t('links.rel')} href={t('links.href')} />
            </Head>
        </div>
    );
};

export default Header;
