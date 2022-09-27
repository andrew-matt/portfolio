import { FC } from 'react';

import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  disabled?: boolean;
};

export const Button: FC<ButtonPropsType> = ({ title, disabled }) => {
  return (
    <button type="submit" disabled={disabled} className={style.button}>
      <span>{title}</span>
    </button>
  );
};
