import React from 'react';
import styles from './CardInfo.module.scss';
import { FaStar } from 'react-icons/fa';

const CardInfo = ({ name, review }) => {
    return (
        <div className={styles['card-info-container']}>
            <h3>{name}</h3>
            <p>{review}</p>
            <span>
                <FaBeer />
            </span>
        </div>
    );
};

export default CardInfo;
