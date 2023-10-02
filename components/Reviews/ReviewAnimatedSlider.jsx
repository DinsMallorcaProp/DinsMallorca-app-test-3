import React from 'react';
import Slider from 'react-animated-slider';
import styles from 'styles/AnimatedSlider.module.scss';
import { FaStar } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

function ReviewAnimatedSlider() {
    const { t } = useTranslation('reviews');
    const spanStars = [];
    for (let i = 0; i < 5; i++) {
        spanStars.push(
            <span key={i}>
                <span>
                    <FaStar className="text-yellow-400" />
                </span>
            </span>
        );
    }
    return (
        <section>
            <Slider classNames={styles}>
                <div
                    key={t('reviews.item1.id')}
                    className={styles['slider-content']}
                >
                    <div className={styles['inner']}>
                        <h2 className="dm-black-subtitle font-semibold p-1">
                            {t('reviews.item1.name')}
                        </h2>
                        <h3 className="dm-black-subtitle font-semibold p-1">
                            {t('reviews.item1.src')}
                        </h3>
                        <span className="flex flex-row items-center justify-center p-1">
                            {spanStars}
                        </span>
                        <p className="dm-black-text p-1">
                            {t('reviews.item1.time')}
                        </p>
                        <p className="dm-black-subtitle font-semibold p-1">
                            {t('reviews.item1.opinions')}
                        </p>
                        <p className="dm-black-text p-1">
                            {t('reviews.item1.review')}
                        </p>
                    </div>
                </div>
                <div
                    key={t('reviews.item2.id')}
                    className={styles['slider-content']}
                >
                    <div className={styles['inner']}>
                        <h2 className="dm-black-subtitle font-semibold p-1">
                            {t('reviews.item2.name')}
                        </h2>
                        <h3 className="dm-black-subtitle font-semibold p-1">
                            {t('reviews.item1.src')}
                        </h3>
                        <span className="flex flex-row items-center justify-center p-1">
                            {spanStars}
                        </span>
                        <p className="dm-black-text p-1">
                            {t('reviews.item1.time')}
                        </p>
                        <p className="dm-black-subtitle font-semibold p-1">
                            {t('reviews.item1.opinions')}
                        </p>
                        <p className="dm-black-text p-1">
                            {t('reviews.item1.review')}
                        </p>
                    </div>
                </div>
            </Slider>
        </section>
    );
}

export default ReviewAnimatedSlider;
