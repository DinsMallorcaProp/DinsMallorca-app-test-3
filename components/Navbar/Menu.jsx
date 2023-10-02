import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
const Menu = () => {
    const { t } = useTranslation('menu');
    const router = useRouter();

    return (
        <ul>
            <li>
                <button
                    onClick={function () {
                        router.push('/?parameter=home');
                    }}
                >
                    <h2 className="dm-black-subtitle max-[768px]:text-white max-[768px]:py-4">
                        {t('menu.home.name')}
                    </h2>
                </button>
            </li>

            <li>
                <button
                    onClick={function () {
                        router.push('/?parameter=srbproperties');
                    }}
                >
                    <h2 className="p-4 dm-black-subtitle  max-[768px]:text-white max-[768px]:py-4">
                        {t('menu.sale.name')}
                    </h2>
                </button>
            </li>

            <li>
                <button
                    onClick={function () {
                        router.push('/?parameter=srbproperties');
                    }}
                >
                    <h2 className="dm-black-subtitle  max-[768px]:text-white max-[768px]:py-4">
                        {t('menu.buy.name')}
                    </h2>
                </button>
            </li>

            <li>
                <button
                    onClick={function () {
                        router.push('/?parameter=srbproperties');
                    }}
                >
                    <h2 className="dm-black-subtitle  max-[768px]:text-white max-[768px]:py-4">
                        {t('menu.rent.name')}
                    </h2>
                </button>
            </li>

            <li>
                <button
                    onClick={function () {
                        router.push('/?parameter=advisor');
                    }}
                >
                    <h2 className="p-4 dm-black-subtitle max-[768px]:text-white max-[768px]:py-4">
                        {t('menu.advisor.name')}
                    </h2>
                </button>
            </li>
            <li>
                <button
                    onClick={function () {
                        router.push('/?parameter=company');
                    }}
                >
                    <h2 className="dm-black-subtitle max-[768px]:text-white max-[768px]:py-4">
                        {t('menu.company.name')}
                    </h2>
                </button>
            </li>
            <li>
                <button
                    onClick={function () {
                        router.push('/?parameter=volunteers');
                    }}
                >
                    <h2 className="dm-black-subtitle max-[768px]:text-white max-[768px]:py-4">
                        {t('menu.volunteer.name')}
                    </h2>
                </button>
            </li>
        </ul>
    );
};

export default Menu;
