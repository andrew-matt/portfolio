import * as React from 'react';
import { FC } from 'react';

import style from './Contacts.module.scss';

import { ContactsForm } from 'common/components/contactsForm/ContactsForm';
import { Title } from 'common/components/title/Title';

const Fade = require('react-reveal/Fade');

export const Contacts: FC = () => {
  // const dispatch = useAppDispatch();

  // const [sendingMessageStatus, setSendingMessageStatus] = useState(false);

  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //     message: '',
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().required('Name is required'),
  //     email: Yup.string().email('Invalid email address').required('Email is required'),
  //     message: Yup.string().required('Message is required'),
  //   }),
  //   onSubmit: async values => {
  //     try {
  //       dispatch(sendMessage(values));
  //     } finally {
  //       // formik.resetForm();
  //     }
  //   },
  // });

  return (
    <div>
      <Fade bottom>
        <div id="contacts" className={style.block}>
          <div className={style.container}>
            <Fade bottom>
              <Title title="Contact With Me" />
            </Fade>
            <Fade bottom>
              <ContactsForm />
              {/* <form */}
              {/*  className={style.form} */}
              {/*  spellCheck="false" */}
              {/*  onSubmit={formik.handleSubmit} */}
              {/* > */}
              {/*  <div className={style.wrapper}> */}
              {/*    <span className={style.title}>your name</span> */}
              {/*    <input */}
              {/*      type="text" */}
              {/*      className={style.input} */}
              {/*      {...formik.getFieldProps('name')} */}
              {/*    /> */}
              {/*    <div className={style.error}> */}
              {/*      {formik.touched.name && formik.errors.name */}
              {/*        ? formik.errors.name */}
              {/*        : null} */}
              {/*    </div> */}
              {/*  </div> */}
              {/*  <div className={style.wrapper}> */}
              {/*    <span className={style.title}>your email</span> */}
              {/*    <input */}
              {/*      type="text" */}
              {/*      className={style.input} */}
              {/*      {...formik.getFieldProps('email')} */}
              {/*    /> */}
              {/*    <div className={style.error}> */}
              {/*      {formik.touched.email && formik.errors.email */}
              {/*        ? formik.errors.email */}
              {/*        : null} */}
              {/*    </div> */}
              {/*  </div> */}
              {/*  <div className={style.wrapper}> */}
              {/*    <span className={style.title}>your message</span> */}
              {/*    <textarea */}
              {/*      cols={30} */}
              {/*      rows={10} */}
              {/*      className={style.textarea} */}
              {/*      {...formik.getFieldProps('message')} */}
              {/*    /> */}
              {/*    <div className={style.error}> */}
              {/*      {formik.touched.message && formik.errors.message */}
              {/*        ? formik.errors.message */}
              {/*        : null} */}
              {/*    </div> */}
              {/*  </div> */}
              {/*  {sendingMessageStatus ? ( */}
              {/*    <div className={style.loadingWrapper}> */}
              {/*      <CircularProgress className={style.loadingCircular} /> */}
              {/*      <span className={style.loadingMessage}>Sending message...</span> */}
              {/*    </div> */}
              {/*  ) : ( */}
              {/*    <div> */}
              {/*      <Button title="SEND MESSAGE" /> */}
              {/*    </div> */}
              {/*  )} */}
              {/* </form> */}
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
};
