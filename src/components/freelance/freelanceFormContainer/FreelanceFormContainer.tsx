import { FC } from 'react';
import * as React from 'react';

import * as Yup from 'yup';

import { ContactsForm } from 'common/components/contactsForm/ContactsForm';
import { CustomInput } from 'common/components/formikFields/input/CustomInput';
import { CustomTextArea } from 'common/components/formikFields/textarea/CustomTextArea';
import style from 'components/freelance/freelanceFormContainer/FreelanceFormContainer.module.scss';

export const FreelanceFormContainer: FC = () => {
  const initialValues = { name: '', project: '', email: '', message: '' };

  const FreelanceContactsValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    project: Yup.string().required('Project name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const title = 'HAVE A PROJECT?';
  const text = 'I’m ready to help you. Please, type the details below.';

  return (
    <ContactsForm
      initialValues={initialValues}
      validationSchema={FreelanceContactsValidationSchema}
    >
      <div className={style.formTitle}>{title}</div>
      <div className={style.formText}>{text}</div>

      <div className={style.wrapper}>
        <CustomInput name="name" placeholder="your name" />
      </div>
      <div className={style.wrapper}>
        <CustomInput name="project" placeholder="your project name" />
      </div>
      <div className={style.wrapper}>
        <CustomInput name="email" placeholder="your email" />
      </div>
      <div className={style.wrapper}>
        <CustomTextArea name="message" placeholder="your message" />
      </div>
    </ContactsForm>
  );
};
