import { FC } from 'react';

import ReactTypingEffect from 'react-typing-effect';

import Photo from 'assets/images/Photo.png';
import style from 'components/main/Main.module.scss';

const Fade = require('react-reveal/Fade');

export const Main: FC = () => {
  const mainDescription =
    'Experience in development with React, Redux, TypeScript. Basic knowledge in React Native. Keep improving my skills in this direction and expanding them with new technologies.';

  return (
    <Fade bottom>
      <div id="main" className={style.mainBlock}>
        <div className={style.container}>
          <div className={style.greeting}>
            <h1>
              <span>Hi, I&apos;m</span>
              <span> Andrei Matviychuk</span>
              <div>
                <span>a </span>
                <ReactTypingEffect text="Front-end Developer" eraseDelay={86400000} />
              </div>
            </h1>
            <p>{mainDescription}</p>
          </div>
          <div className={style.photo}>
            <img src={Photo} width="100%" alt="me" />
          </div>
        </div>
      </div>
    </Fade>
  );
};
