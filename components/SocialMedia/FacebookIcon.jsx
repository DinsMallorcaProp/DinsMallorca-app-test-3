import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { SocialMediaList } from 'constants/SocialMediaList.js';
import Link from 'next/link';

function FacebookIcon({ size }) {
    return (
        <>
            <Link href={SocialMediaList.Facebook.href} legacyBehavior>
                <a target={SocialMediaList.Instagram.target}>
                    <FaFacebook size={size} className="facebook-logo" />
                </a>
            </Link>
        </>
    );
}

export default FacebookIcon;
