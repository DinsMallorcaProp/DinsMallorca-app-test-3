import React from 'react';
import {
    Header,
    Hero,
    AdvisorsSection,
    PropertiesInfoSection,
    PropertiesForSaleSection,
    PropertiesSearchSection,
    PropertiesForRentSection,
    AdvisorContact,
    Reviews,
    HomeCarouselSection,
    VolunteersHeader,
    StagingSection
} from 'components/index';

const home = () => {
    return (
        <>
            <Hero />
            <AdvisorsSection />
            <PropertiesForSaleSection />
            <PropertiesSearchSection />
            <PropertiesInfoSection />
            <PropertiesForRentSection />
            <StagingSection />
            <VolunteersHeader button="true" />
            <AdvisorContact />
            <HomeCarouselSection />
            <Reviews />
        </>
    );
};

export default home;
