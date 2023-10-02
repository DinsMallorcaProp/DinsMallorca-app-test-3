import {
    TitleImgText,
    AdvisorContact,
    AdvisorsInfoCardsGroup
} from 'components/index';
import { useTranslation } from 'next-i18next';

export default function AdvisorsPage() {
    const { t } = useTranslation('advisorsInfo');
    return (
        <>
            <TitleImgText
                title={t('advisorsGroupInfo.title1')}
                imgUrl={t('advisorsGroupInfo.imgFront1.url')}
                imgAlt={t('advisorsGroupInfo.imgFront1.alt')}
                text={t('advisorsGroupInfo.text1')}
                imagClass="dm-titimg-contain-object-top"
            />
            <AdvisorContact />
            <AdvisorsInfoCardsGroup />
            <TitleImgText
                imgUrl={t('advisorsGroupInfo.imgFront2.url')}
                imgAlt={t('advisorsGroupInfo.imgFront2.alt')}
                imagClass="dm-titimg-contain-object-top"
            />
        </>
    );
}
