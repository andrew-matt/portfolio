import * as React from 'react';
import { FC } from 'react';

import { CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { sendMessage } from 'app-reducer';
import { Button } from 'common/components/button/Button';
import style from 'common/components/contactsForm/ContactsForm.module.scss';
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks';

export const ContactsForm: FC = () => {
  const dispatch = useAppDispatch();

  const sendingMessageStatus = useAppSelector(state => state.app.sendingMessageStatus);

  const formik = useFormik({
    initialValues: {
      name: '',
      project: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      project: Yup.string().required('Project name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async values => {
      try {
        dispatch(sendMessage(values));
      } finally {
        // formik.resetForm();
      }
    },
  });

  return (
    <form className={style.form} spellCheck="false" onSubmit={formik.handleSubmit}>
      <div className={style.formTitle}>HAVE A PROJECT?</div>
      <div className={style.formText}>
        I’m ready to help you. Please, type the details below.
      </div>
      <div className={style.wrapper}>
        <input
          type="text"
          className={style.input}
          {...formik.getFieldProps('name')}
          placeholder="your name"
        />
        <div className={style.error}>
          {formik.touched.name && formik.errors.name ? formik.errors.name : null}
        </div>
      </div>
      <div className={style.wrapper}>
        <input
          type="text"
          className={style.input}
          {...formik.getFieldProps('project')}
          placeholder="your project name"
        />
        <div className={style.error}>
          {formik.touched.project && formik.errors.project ? formik.errors.project : null}
        </div>
      </div>
      <div className={style.wrapper}>
        <input
          type="text"
          className={style.input}
          {...formik.getFieldProps('email')}
          placeholder="your email"
        />
        <div className={style.error}>
          {formik.touched.email && formik.errors.email ? formik.errors.email : null}
        </div>
      </div>
      <div className={style.wrapper}>
        <textarea
          cols={30}
          rows={10}
          className={style.textarea}
          {...formik.getFieldProps('message')}
          placeholder="your message"
        />
        <div className={style.error}>
          {formik.touched.message && formik.errors.message ? formik.errors.message : null}
        </div>
      </div>
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
    </form>
  );
};
