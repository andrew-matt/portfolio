import { FC } from 'react';

import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
};

export const Button: FC<ButtonPropsType> = ({ title }) => {
  return (
    <button type="submit" className={style.button}>
      <span>{title}</span>
    </button>
  );
};
