import { useRouter } from 'next/router';
import HomePage from './home'; // Import your Home component
import Advisor from './advisors';
import Volunteers from './volunteers';
import SRBPropertiesHome from './srbpropertieshome';
import Stanging from './staging';
import { Header } from 'components/index';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
const home = () => {
    const router = useRouter();
    const parameter = router.query.parameter || 'default-value';
    if (parameter === 'home') {
        return (
            <>
                <Header />
                <HomePage />;
            </>
        );
    } else if (parameter === 'advisor') {
        return (
            <>
                <Header />
                <Advisor />
            </>
        );
    } else if (parameter === 'volunteers') {
        return (
            <>
                <Header />
                <Volunteers />
            </>
        );
    } else if (parameter === 'srbproperties') {
        return (
            <>
                <Header />
                <SRBPropertiesHome />
            </>
        );
    } else if (parameter === 'staging') {
        return (
            <>
                <Header />
                <Stanging />;
            </>
        );
    } else {
        return (
            <>
                <Header />
                <HomePage />;
            </>
        );
    }
};

export default home;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'advisorsInfo',
                'homeCarouselSection',
                'common',
                'location',
                'menu',
                'header',
                'hero',
                'events',
                'reviews',
                'propertiesForSales',
                'propertiesSearch',
                'propertiesInfo',
                'propertiesForRent',
                'advisorContact',
                'volunteersInfo',
                'volunteersContact',
                'staging',
                'srbpropiedadeshome'
            ]))
        }
    };
}
