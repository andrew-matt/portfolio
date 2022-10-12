import * as React from 'react';
import { FC } from 'react';

import * as Yup from 'yup';

import { ContactsForm } from 'common/components/contactsForm/ContactsForm';
import { CustomInput } from 'common/components/formikFields/input/CustomInput';
import { CustomTextArea } from 'common/components/formikFields/textarea/CustomTextArea';
import style from 'components/contacts/contactsFormContainer/ContactsFormContainer.module.scss';

export const ContactsFormContainer: FC = () => {
  const initialValues = { name: '', email: '', message: '' };

  const ContactsValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <ContactsForm
      initialValues={initialValues}
      validationSchema={ContactsValidationSchema}
      className={style.form}
    >
      <div className={style.wrapper}>
        <span className={style.title}>your name</span>
        <CustomInput name="name" />
      </div>
      <div className={style.wrapper}>
        <span className={style.title}>your email</span>
        <CustomInput name="email" />
      </div>
      <div className={style.wrapper}>
        <span className={style.title}>your message</span>
        <CustomTextArea name="message" />
      </div>
    </ContactsForm>
  );
};
