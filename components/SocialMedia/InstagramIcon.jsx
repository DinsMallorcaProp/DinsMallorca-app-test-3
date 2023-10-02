import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { SocialMediaList } from 'constants/SocialMediaList.js';
import Link from 'next/link';

function InstagramIcon({ size }) {
    return (
        <Link href={SocialMediaList.Instagram.href} legacyBehavior>
            <a target={SocialMediaList.Instagram.target}>
                <FaInstagram size={size} className="instagram-logo" />
            </a>
        </Link>
    );
}

export default InstagramIcon;
