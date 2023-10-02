import React from 'react';
import { GlobalBtnLinkT1 } from 'components/index';

const TitleTextBtnT2 = ({ text, btnTitle, btnUrl, btnTarget }) => {
    return (
        <div className="dm-title-text-btn-container">
            <div className="dm-title-text-boxes-wrapper ">
                <div className="dm-box-2-w-60-h-40">
                    <p>{text}</p>
                </div>
                <div className="dm-box-1-w-50-h-60"></div>
            </div>
            <div className="dm-btns-t2-wrapper">
                <GlobalBtnLinkT1
                    title={btnTitle}
                    url={btnUrl}
                    target={btnTarget}
                />
            </div>
        </div>
    );
};

export default TitleTextBtnT2;
