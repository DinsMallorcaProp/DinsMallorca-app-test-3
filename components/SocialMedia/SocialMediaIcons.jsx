import React from 'react';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import { WhatsApp } from 'components/index';
import { SocialMediaList } from 'constants/SocialMediaList.js';

function SocialMediaIcons() {
    return (
        <div className="flex items-center justify-center space-x-1">
            <FacebookIcon size={25} />
            <InstagramIcon size={25} />
            <WhatsApp
                size={20}
                href={SocialMediaList.WhatsApp.href}
                target={SocialMediaList.WhatsApp.target}
            />
        </div>
    );
}

export default SocialMediaIcons;
