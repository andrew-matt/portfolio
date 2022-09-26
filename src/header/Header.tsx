import { FC } from 'react';

import style from './Header.module.scss';

import { Nav } from 'nav/Nav';

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <Nav />
    </header>
  );
};
