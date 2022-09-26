import { FC } from 'react';

import style from './Main.module.scss';
import Photo from './Photo.png';

export const Main: FC = () => {
  const mainDescription =
    'a Front-end Developer. Nec ullamcorper sit amet risus nullam eget felis. Felis eget nunc lobortis mattis aliquam faucibus. Ullamcorper malesuada proin libero nunc. Purus faucibus ornare suspendisse sed nisi lacus sed. Pellentesque elit eget gravida cum.';

  return (
    <div className={style.mainBlock}>
      <div className={style.container}>
        <div className={style.greeting}>
          <h1>
            <span>Hi, I&apos;m</span>
            <span> Andrei Matviychuk</span>
          </h1>
          <p>{mainDescription}</p>
        </div>
        <div className={style.photo}>
          <img src={Photo} width="100%" alt="me" />
        </div>
      </div>
    </div>
  );
};
