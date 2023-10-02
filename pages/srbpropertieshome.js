import React from 'react';
import {
    SRBPropertiesHeader,
    SRBPropertiesIntro,
    SRBPropertiesFilters
} from 'components/index';
//import PropertyDetails from './propertiesDetails';
const srbproperties = () => {
    return (
        <div>
            <SRBPropertiesHeader />
            <SRBPropertiesIntro />
            <SRBPropertiesFilters />
            {/*   <PropertyDetails /> */}
        </div>
    );
};

export default srbproperties;
