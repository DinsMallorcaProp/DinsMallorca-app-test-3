import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { SuccessAlert, ErrorAlert } from 'components/index';
const ContactForm = ({
    titlePr,
    successMsgText,
    errorMsgText,
    btnSendText,
    btnCleanInputsText,
    firstNamePr,
    firstNamePl,
    firstNameEmpMsg,
    firstNameErrMsg,
    lastNamePr,
    lastNamePl,
    lastNameEmpMsg,
    lastNameErrMsg,
    phonePr,
    phonePl,
    phoneEmpMsg,
    phoneErrMsg,
    emailPr,
    emailPl,
    emailEmpMsg,
    emailErrMsg,
    messagePr,
    messagePl,
    messageEmpMsg
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/sendEmail', data);
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            reset();
        } catch (error) {
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
        }
    };

    return (
        <div className="dm-cols-1-center-container">
            <form onSubmit={handleSubmit(onSubmit)} className="dm-contact-form">
                <h1 className="dm-blue-subtitle">{titlePr}</h1>
                <div className="text-left">
                    {showSuccessMessage && (
                        <SuccessAlert message={successMsgText} />
                    )}
                    {showFailureMessage && (
                        <ErrorAlert message={errorMsgText} />
                    )}
                </div>
                <label htmlFor="fistName" className="dm-black-text">
                    {firstNamePr}
                    <span className="dm-asterisk">*</span>
                </label>
                <input
                    name="firstName"
                    className="dm-input"
                    placeholder={firstNamePl}
                    {...register('firstName', {
                        required: `${firstNameEmpMsg}`,
                        pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: `${firstNameErrMsg}`
                        }
                    })}
                />
                <p className="dm-error-message">{errors?.firstName?.message}</p>
                <label htmlFor="lastName" className="dm-black-text">
                    {lastNamePr}
                    <span className="dm-asterisk">*</span>
                </label>
                <input
                    name="lastName"
                    className="dm-input"
                    placeholder={lastNamePl}
                    {...register('lastName', {
                        required: `${lastNameEmpMsg}`,
                        pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: `${lastNameErrMsg}`
                        }
                    })}
                />
                <p className="dm-error-message">{errors?.lastName?.message}</p>
                <label htmlFor="phone" className="dm-black-text">
                    {phonePr}
                    <span className="dm-asterisk">*</span>
                </label>
                <input
                    name="phone"
                    className="dm-input"
                    placeholder={phonePl}
                    {...register('phone', {
                        required: `${phoneEmpMsg}`,
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: `${phoneErrMsg}`
                        }
                    })}
                />
                <p className="dm-error-message">{errors?.phone?.message}</p>
                <label htmlFor="email" className="dm-black-text">
                    {emailPr}
                    <span className="dm-asterisk">*</span>
                </label>
                <input
                    name="email"
                    className="dm-input"
                    placeholder={emailPl}
                    {...register('email', {
                        required: `${emailEmpMsg}`,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: `${emailErrMsg}`
                        }
                    })}
                />
                <p className="dm-error-message">{errors?.email?.message}</p>

                <label htmlFor="message" className="dm-black-text">
                    {messagePr}
                    <span className="dm-asterisk">*</span>
                </label>
                <textarea
                    name="message"
                    className="dm-input border"
                    placeholder={messagePl}
                    {...register('message', {
                        required: `${messageEmpMsg}`
                    })}
                ></textarea>
                <p className="dm-error-message">{errors?.message?.message}</p>

                <div className="flex md:flex-row flex-col items-center justify-center">
                    <button
                        className="flex justify-center items-center relative rounded px-5 py-2.5 overflow-hidden group bg-dmgreen-bg  hover:bg-gradient-to-r hover:from-dmgreen-bg hover:to-dmgreen-bg text-black  hover:ring-2 hover:ring-offset-2 hover:ring-dmgreen-border transition-all ease-out duration-300 m-8 border-2 border-dmgreen-border"
                        type="submit"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                        </svg>
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative dm-black-text pl-2">
                            {btnSendText}
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => reset()}
                        className="flex justify-center items-center relative rounded px-5 py-2.5 overflow-hidden group bg-dmgreen-bg  hover:bg-gradient-to-r hover:from-dmgreen-bg hover:to-dmgreen-bg text-black  hover:ring-2 hover:ring-offset-2 hover:ring-dmgreen-border transition-all ease-out duration-300 m-8 border-2 border-dmgreen-border"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-dmwhite opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative dm-black-text pl-2">
                            {btnCleanInputsText}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};
export default ContactForm;
