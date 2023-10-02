import React from 'react';
import { ContactForm, BackCoverImage } from 'components/index';
import { useTranslation } from 'next-i18next';

const AdvisorContact = () => {
    const { t } = useTranslation('advisorContact');
    return (
        <section className="dm-flex-col-full-container">
            <div>
                <BackCoverImage
                    imgUrl={t('backImage.url')}
                    imgAlt={t('backImage.alt')}
                />
            </div>
            <div>
                <ContactForm
                    titlePr={t('title')}
                    successMsgText={t('SuccessMsgText')}
                    errorMsgText={t('errorMsgText')}
                    btnSendText={t('btnTextSend')}
                    btnSentText={t('btnTextSent')}
                    btnCleanInputsText={t('btnCleanInputsText')}
                    firstNamePr={t('fistName.text')}
                    firstNamePl={t('fistName.placeholder')}
                    firstNameEmpMsg={t('fistName.emptyMsg')}
                    firstNameErrMsg={t('fistName.errorMsg')}
                    lastNamePr={t('lastName.text')}
                    lastNamePl={t('lastName.placeholder')}
                    lastNameEmpMsg={t('lastName.emptyMsg')}
                    lastNameErrMsg={t('lastName.errorMsg')}
                    phonePr={t('phone.text')}
                    phonePl={t('phone.placeholder')}
                    phoneEmpMsg={t('phone.emptyMsg')}
                    phoneErrMsg={t('phone.errorMsg')}
                    emailPr={t('email.text')}
                    emailPl={t('email.placeholder')}
                    emailEmpMsg={t('email.emptyMsg')}
                    emailErrMsg={t('email.errorMsg')}
                    messagePr={t('message.text')}
                    messagePl={t('message.placeholder')}
                    messageEmpMsg={t('message.emptyMsg')}
                />
            </div>
        </section>
    );
};

export default AdvisorContact;
