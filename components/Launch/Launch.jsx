import React from 'react';
import Image from 'next/image';
import styles from './Launch.module.scss';
import { useTranslation } from 'next-i18next';

const Launch = () => {
    const { t } = useTranslation('launch');
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <p>{t('launch.text')}</p>
                    <div />
                    <div className={styles.item}>
                        <Image
                            className={styles.image}
                            src="/assets/gallery/dins-mallorca-logo-1.webp"
                            alt="DinsMallorca Logo"
                            width={550}
                            height={550}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Launch;
