import React from 'react';
import styles from './GlobalAnimatedBtn.module.scss';
import { GlobalAnimatedBtn } from 'components/index';

const ButtonsAnimatedGroup = ({ btnsList }) => {
    return (
        <div className={styles['btns-group']}>
            {btnsList.map((item) => (
                <GlobalAnimatedBtn
                    buttonUrl={item.url}
                    urlText={item.title}
                    target={item.target}
                    btn="btn"
                    btnBg="green-dm-btn"
                    btnAnimated="btn-animated"
                    btnText="black-text"
                />
            ))}
        </div>
    );
};

export default ButtonsAnimatedGroup;
