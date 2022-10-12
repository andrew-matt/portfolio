import { FC, useEffect, useState } from 'react';

import { useAppSelector } from 'common/hooks/hooks';
import { BurgerNav } from 'components/burgerNav/BurgerNav';
import style from 'components/header/Header.module.scss';
import { Nav } from 'components/nav/Nav';

export const Header: FC = () => {
  const show = useAppSelector(state => state.modal.show);

  const maxScrollPosition = 300;

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (): void => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (show) {
    return null;
  }

  return (
    <div id="headerContainer" className={style.headerContainer}>
      <header
        className={`${style.header} ${
          scrollPosition > maxScrollPosition && style.headerFixed
        } ${showMenu && style.headerFixedBurger}`}
      >
        <BurgerNav showMenu={showMenu} setShowMenu={setShowMenu} />
        <Nav />
      </header>
    </div>
  );
};
