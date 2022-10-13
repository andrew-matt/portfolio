import * as React from 'react';
import { FC, ReactNode } from 'react';

import { CircularProgress } from '@mui/material';
import { Form, Formik } from 'formik';

import { sendMessage, SubmitFormValuesType } from 'app/app-reducer';
import { Button } from 'common/components/button/Button';
import style from 'common/components/contactsForm/ContactsForm.module.scss';
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks';

type ContactsFormPropsType = {
  initialValues: SubmitFormValuesType;
  validationSchema: any | (() => any);
  children: ReactNode;
  className?: string;
};

export const ContactsForm: FC<ContactsFormPropsType> = ({
  initialValues,
  validationSchema,
  children,
  className,
}) => {
  const dispatch = useAppDispatch();

  const sendingMessageStatus = useAppSelector(state => state.app.sendingMessageStatus);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        try {
          dispatch(sendMessage(values));
        } finally {
          resetForm();
        }
      }}
    >
      <Form className={`${style.form} ${className}`} spellCheck="false">
        {children}
        {sendingMessageStatus ? (
          <div className={style.loadingWrapper}>
            <CircularProgress className={style.loadingCircular} />
            <span className={style.loadingMessage}>Sending message...</span>
          </div>
        ) : (
          <div>
            <Button title="SEND MESSAGE" />
          </div>
        )}
      </Form>
    </Formik>
  );
};
