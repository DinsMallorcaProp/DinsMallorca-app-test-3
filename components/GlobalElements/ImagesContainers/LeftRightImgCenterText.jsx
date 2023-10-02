import React from 'react';
import styles from './LeftRightImgCenterText.module.scss';
import Image from 'next/image';
import { GlobalBtnLinkT1 } from 'components/index';

const LeftRightImgCenterText = ({
    text,
    btnTitle,
    btnUrl,
    btnTarget,
    leftImg,
    leftImgAlt,
    rightImg,
    rightImgAlt
}) => {
    return (
        <div className={styles['right-left-imgs-text-container']}>
            <div className={styles['left-right-img-side-wrapper']}>
                <Image
                    src={leftImg}
                    alt={leftImgAlt}
                    className={styles['left-img-side']}
                    fill
                    loading="lazy"
                />
            </div>
            <div className={styles['center-text-wrapper']}>
                <p>{text}</p>
                <div className={styles['btns-wrapper']}>
                    <GlobalBtnLinkT1
                        title={btnTitle}
                        url={btnUrl}
                        target={btnTarget}
                    />
                </div>
            </div>
            <div className={styles['left-right-img-side-wrapper']}>
                <Image
                    src={rightImg}
                    alt={rightImgAlt}
                    className={styles['right-img-side']}
                    fill
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default LeftRightImgCenterText;
