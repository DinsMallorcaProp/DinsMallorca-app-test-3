import React from 'react';
import { LocationMap } from 'components/index';
import { useTranslation } from 'next-i18next';
import styles from './Location.module.scss';

const Location = () => {
    const { t: locationT } = useTranslation('location');
    const lat = locationT('mapInfo.lat');
    const long = locationT('mapInfo.long');
    const title = locationT('mapInfo.title');
    const description = locationT('address');
    return (
        <div className={styles['location-wrapper']}>
            <div className="address-info">{/* Contact form component */}</div>
            <div className={styles['map-location']}>
                <LocationMap
                    lat={lat}
                    long={long}
                    title={title}
                    description={description}
                    zoom={11}
                />
            </div>
        </div>
    );
};

export default Location;
