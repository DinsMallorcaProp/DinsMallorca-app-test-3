import React from 'react';
import { GlobalBtnLinkT1 } from 'components/index';

const TitleTextBtnT1 = ({ text, btnTitle, btnUrl, btnTarget }) => {
    return (
        <div className="dm-title-text-btn-container">
            <div className="dm-title-text-boxes-wrapper">
                <div className="dm-box-1-w-60-h-60"></div>
                <div className="dm-box-2-w-60-h-60">
                    <p className="text-left">{text}</p>
                </div>
            </div>
            <div className="dm-btns-t1-wrapper">
                <GlobalBtnLinkT1
                    title={btnTitle}
                    url={btnUrl}
                    target={btnTarget}
                />
            </div>
        </div>
    );
};

export default TitleTextBtnT1;
