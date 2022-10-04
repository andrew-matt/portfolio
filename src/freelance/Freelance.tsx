import { FC } from 'react';

import style from './Freelance.module.scss';

import { Button } from 'common/components/button/Button';
import { Title } from 'common/components/title/Title';

const Fade = require('react-reveal/Fade');

export const Freelance: FC = () => {
  return (
    <Fade bottom>
      <div className={style.block}>
        <div className={style.footerContainer}>
          <Fade bottom>
            <Title title="I Am Available For Freelance" />
          </Fade>
          <Fade bottom>
            <div>
              <Button title="HIRE ME" />
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};
