import { FC } from 'react';

import { Link } from 'react-scroll';

import style from 'components/nav/Nav.module.scss';

export const Nav: FC = () => {
  return (
    <div className={style.nav}>
      <Link activeClass={style.active} to="main" spy smooth offset={-90} duration={500}>
        MAIN
      </Link>
      <Link activeClass={style.active} to="skills" spy smooth offset={-90} duration={500}>
        SKILLS
      </Link>
      <Link
        activeClass={style.active}
        to="projects"
        spy
        smooth
        offset={-90}
        duration={500}
      >
        PROJECTS
      </Link>
      <Link
        activeClass={style.active}
        to="contacts"
        spy
        smooth
        offset={-90}
        duration={500}
      >
        CONTACT
      </Link>
    </div>
  );
};
