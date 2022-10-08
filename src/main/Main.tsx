import { FC } from 'react';

import ReactTypingEffect from 'react-typing-effect';

import style from './Main.module.scss';
import Photo from './Photo.png';

const Fade = require('react-reveal/Fade');

export const Main: FC = () => {
  const mainDescription =
    'Eager to develop web applications and software. Intend to grow as a specialist in the field and improve my development skills. Experience in development with React, Redux, TypeScript. Interested in continuous learning. Speak English at an intermediate level.';

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
