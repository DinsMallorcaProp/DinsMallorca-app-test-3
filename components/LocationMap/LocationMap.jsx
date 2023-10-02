import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';

import styles from './LocationMap.module.scss';

function LocationMap() {
    const Map = dynamic(
        () => import('./Map'), //
        { ssr: false } // This line is important. It's what prevents server-side render
    );
    const { t } = useTranslation('location');
    const lat = t('mapInfo.lat');
    const long = t('mapInfo.long');
    const text = t('mapInfo.name');
    const title = t('mapInfo.title');

    const location =
        t('address.street') +
        ' - ' +
        t('address.zipCode') +
        ' - ' +
        t('address.city') +
        ' ' +
        t('address.country');

    return (
        <section className={styles['map-container']}>
            <div className={styles['map-wrapper']}>
                <Map
                    lat={lat}
                    long={long}
                    title={text}
                    description={location}
                />
            </div>
        </section>
    );
}

export default LocationMap;
