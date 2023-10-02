import React from 'react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Flag from 'react-flagkit';
const AdvisorInfoCard = ({
    picture,
    alt,
    name,
    role,
    cell,
    whref,
    wtarget
}) => {
    return (
        <div className="mx-4 sm:w-full md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow rounded-lg">
            <div className="mx-auto w-60 h-60 relative border-4 border-white rounded-full overflow-hidden">
                <Image
                    className="object-cover object-top h-32"
                    src={picture}
                    alt={alt}
                    fill
                    loading="lazy"
                />
            </div>
            <div className="text-center mt-2">
                <div className="p-4">
                    <h3 className="dm-black-subtitle">{name}</h3>
                    <p className="dm-black-text">{role}</p>
                    <p className="dm-black-text">{cell}</p>
                    <ul className="flex flex-row items-center justify-center">
                        <li className="dm-flag-icon pr-4">
                            <Flag country="ES" size={30} />
                        </li>
                        <li className="dm-flag-icon pr-4">
                            <Flag country="GB" size={30} />
                        </li>
                        <li>
                            <Link href={whref} legacyBehavior>
                                <a target={wtarget}>
                                    <FaWhatsapp
                                        size={30}
                                        className="whatapp-logo"
                                    />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdvisorInfoCard;
