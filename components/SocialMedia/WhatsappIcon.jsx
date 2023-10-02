import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

function WhatsappIcon({ size, href, target }) {
    return (
        <>
            <Link href={href} legacyBehavior>
                <a target={target}>
                    <FaWhatsapp size={size} className="whatapp-logo" />
                </a>
            </Link>
        </>
    );
}

export default WhatsappIcon;
