import AdvisorInfoCard from './AdvisorInfoCard';
import { useTranslation } from 'next-i18next';

const AdvisorsInfoCardsGroup = () => {
    const { t } = useTranslation('advisorsInfo');
    return (
        <section>
            <div className="flex md:flex-row flex-col items-center justify-center">
                <div className="mr-4 md:w-[20%]  w-[80%]">
                    <AdvisorInfoCard
                        picture={t('advisorsProfiles.profile1.picture.url')}
                        alt={t('advisorsProfiles.profile1.picture.alt')}
                        name={t('advisorsProfiles.profile1.name')}
                        role={t('advisorsProfiles.profile1.role')}
                        cell={t('advisorsProfiles.profile1.cell')}
                        whref={t('advisorsProfiles.profile1.whatsapp.href')}
                        wtarget={t('advisorsProfiles.profile1.whatsapp.target')}
                    />
                </div>
                <div className="mr-4  md:w-[20%]  w-[80%]">
                    <AdvisorInfoCard
                        picture={t('advisorsProfiles.profile2.picture.url')}
                        alt={t('advisorsProfiles.profile2.picture.alt')}
                        name={t('advisorsProfiles.profile2.name')}
                        role={t('advisorsProfiles.profile2.role')}
                        cell={t('advisorsProfiles.profile2.cell')}
                        whref={t('advisorsProfiles.profile2.whatsapp.href')}
                        wtarget={t('advisorsProfiles.profile2.whatsapp.target')}
                    />
                </div>
                <div className="mr-4  md:w-[20%] w-[80%]">
                    <AdvisorInfoCard
                        picture={t('advisorsProfiles.profile3.picture.url')}
                        alt={t('advisorsProfiles.profile3.picture.alt')}
                        name={t('advisorsProfiles.profile3.name')}
                        role={t('advisorsProfiles.profile3.role')}
                        cell={t('advisorsProfiles.profile3.cell')}
                        whref={t('advisorsProfiles.profile3.whatsapp.href')}
                        wtarget={t('advisorsProfiles.profile3.whatsapp.target')}
                    />
                </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center">
                <div className="mr-4  md:w-[20%]  w-[80%]">
                    <AdvisorInfoCard
                        picture={t('advisorsProfiles.profile4.picture.url')}
                        alt={t('advisorsProfiles.profile4.picture.alt')}
                        name={t('advisorsProfiles.profile4.name')}
                        role={t('advisorsProfiles.profile4.role')}
                        cell={t('advisorsProfiles.profile4.cell')}
                        whref={t('advisorsProfiles.profile4.whatsapp.href')}
                        wtarget={t('advisorsProfiles.profile4.whatsapp.target')}
                    />
                </div>
            </div>
        </section>
    );
};

export default AdvisorsInfoCardsGroup;
