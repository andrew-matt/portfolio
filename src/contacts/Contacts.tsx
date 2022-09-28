import * as React from 'react';
import { FC, useState } from 'react';

import { CircularProgress } from '@mui/material';
import { AlertColor } from '@mui/material/Alert/Alert';
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import style from './Contacts.module.scss';

import { Button } from 'common/components/button/Button';
import { SnackBar } from 'common/components/snackbar/SnackBar';
import { Title } from 'common/components/title/Title';

export const Contacts: FC = () => {
  const [sendingMessageStatus, setSendingMessageStatus] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarTitle, setSnackBarTitle] = useState('');
  const [snackBarSeverity, setSnackBarSeverity] = useState<AlertColor>('' as AlertColor);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async values => {
      try {
        setSendingMessageStatus(true);
        await axios.post('https://smtp-nodejs-server-39586.herokuapp.com/sendMessage', {
          values,
        });
        setSnackBarTitle('Your message has been sent !');
        setSnackBarSeverity('success');
        setSnackBarOpen(true);
      } catch (error) {
        const err = error as Error | AxiosError<{ error: string }>;

        if (axios.isAxiosError(err)) {
          setSendingMessageStatus(true);
          setSnackBarTitle(err.message);
          setSnackBarSeverity('error');
          setSnackBarOpen(true);
        }
      } finally {
        formik.resetForm();
        setSendingMessageStatus(false);
      }
    },
  });

  return (
    <div>
      <div className={style.block}>
        <div className={style.container}>
          <Title title="Contact With Me" />
          <form className={style.form} spellCheck="false" onSubmit={formik.handleSubmit}>
            <div className={style.wrapper}>
              <span className={style.title}>your name</span>
              <input
                type="text"
                className={style.input}
                {...formik.getFieldProps('name')}
              />
              <div className={style.error}>
                {formik.touched.name && formik.errors.name ? formik.errors.name : null}
              </div>
            </div>
            <div className={style.wrapper}>
              <span className={style.title}>your email</span>
              <input
                type="text"
                className={style.input}
                {...formik.getFieldProps('email')}
              />
              <div className={style.error}>
                {formik.touched.email && formik.errors.email ? formik.errors.email : null}
              </div>
            </div>
            <div className={style.wrapper}>
              <span className={style.title}>your message</span>
              <textarea
                cols={30}
                rows={10}
                className={style.textarea}
                {...formik.getFieldProps('message')}
              />
              <div className={style.error}>
                {formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : null}
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
        </div>
      </div>
      <SnackBar
        title={snackBarTitle}
        severity={snackBarSeverity}
        open={snackBarOpen}
        setOpen={setSnackBarOpen}
      />
    </div>
  );
};
