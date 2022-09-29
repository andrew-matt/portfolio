import { FC } from 'react';

import { Link } from 'react-scroll';

import style from './Nav.module.scss';

export const Nav: FC = () => {
  return (
    <div className={style.nav}>
      <Link activeClass={style.active} to="main" spy smooth duration={500}>
        MAIN
      </Link>
      <Link activeClass={style.active} to="skills" spy smooth duration={500}>
        SKILLS
      </Link>
      <Link activeClass={style.active} to="projects" spy smooth duration={500}>
        PROJECTS
      </Link>
      <Link activeClass={style.active} to="contacts" spy smooth duration={500}>
        CONTACT
      </Link>
    </div>
  );
};
