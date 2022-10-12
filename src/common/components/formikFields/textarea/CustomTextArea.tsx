import { FC, ReactElement } from 'react';
import * as React from 'react';

import { useField } from 'formik';

import style from './CustomTextArea.module.scss';

export const CustomTextArea: FC<CustomTextAreaPropsType> = ({
  ...props
}): ReactElement => {
  const [field, meta] = useField(props);

  return (
    <>
      <textarea className={style.textarea} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

// types
type CustomTextAreaPropsType = {
  name: string;
  placeholder?: string;
};
