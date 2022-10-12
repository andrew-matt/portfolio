import { FC } from 'react';

import style from 'components/footer/Footer.module.scss';

const Fade = require('react-reveal/Fade');

export const Footer: FC = () => {
  return (
    <div className={style.footerBlock}>
      <div className={style.footerContainer}>
        <Fade bottom>
          <h2 className={style.title}>Andrei Matviychuk</h2>
        </Fade>
        <Fade bottom>
          <div className={style.copyright}>© 2022 All rights reserved</div>
        </Fade>
      </div>
    </div>
  );
};
