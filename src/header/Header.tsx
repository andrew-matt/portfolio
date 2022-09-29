import { FC, useEffect, useState } from 'react';

import style from './Header.module.scss';

import { Nav } from 'nav/Nav';

export const Header: FC = () => {
  const maxScrollPosition = 300;

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (): void => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="headerContainer" className={style.headerContainer}>
      <header
        className={`${style.header} ${
          scrollPosition > maxScrollPosition && style.headerFixed
        }`}
      >
        <Nav />
      </header>
    </div>
  );
};
