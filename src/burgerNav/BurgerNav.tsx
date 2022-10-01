import { FC } from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

import style from 'burgerNav/BurgerNav.module.scss';

type BurgerNavPropsType = {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
};

export const BurgerNav: FC<BurgerNavPropsType> = ({ showMenu, setShowMenu }) => {
  const showMenuHandle = (): void => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={style.burgerNav}>
      <div className={`${style.burgerItems} ${showMenu && style.show}`}>
        <Link
          onClick={showMenuHandle}
          activeClass={style.active}
          to="main"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          MAIN
        </Link>
        <Link
          onClick={showMenuHandle}
          activeClass={style.active}
          to="skills"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          SKILLS
        </Link>
        <Link
          onClick={showMenuHandle}
          activeClass={style.active}
          to="projects"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          PROJECTS
        </Link>
        <Link
          onClick={showMenuHandle}
          activeClass={style.active}
          to="contacts"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          CONTACT
        </Link>
      </div>
      <div
        className={style.burgerButton}
        onClick={showMenuHandle}
        onKeyUp={() => {}}
        tabIndex={0}
        role="button"
        aria-label="show menu"
      >
        <FontAwesomeIcon icon={faBars} color="#ff014f" size="2x" />
      </div>
    </div>
  );
};
