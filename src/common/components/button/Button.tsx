import { FC } from 'react';

import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: FC<ButtonPropsType> = ({ title, onClick, disabled }) => {
  return (
    <button type="submit" onClick={onClick} disabled={disabled} className={style.button}>
      <span>{title}</span>
    </button>
  );
};
