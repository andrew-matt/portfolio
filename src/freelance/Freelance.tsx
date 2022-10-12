import { FC } from 'react';

import style from './Freelance.module.scss';

import { Button } from 'common/components/button/Button';
import { setShow } from 'common/components/modal/modal-reducer';
import { Title } from 'common/components/title/Title';
import { useAppDispatch } from 'common/hooks/hooks';

const Fade = require('react-reveal/Fade');

export const Freelance: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Fade bottom>
      <div className={style.block}>
        <div className={style.footerContainer}>
          <Fade bottom>
            <Title title="I Am Available For Freelance" />
          </Fade>
          <Fade bottom>
            <div>
              <Button onClick={() => dispatch(setShow(true))} title="HIRE ME" />
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};
