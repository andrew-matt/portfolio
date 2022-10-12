import { FC } from 'react';
import * as React from 'react';

import { Button } from 'common/components/button/Button';
import { Modal } from 'common/components/modal/Modal';
import { setShow } from 'common/components/modal/modal-reducer';
import { Title } from 'common/components/title/Title';
import { useAppDispatch } from 'common/hooks/hooks';
import style from 'components/freelance/Freelance.module.scss';
import { FreelanceFormContainer } from 'components/freelance/freelanceFormContainer/FreelanceFormContainer';

const Fade = require('react-reveal/Fade');

export const Freelance: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Fade bottom>
        <div className={style.block}>
          <div className={style.container}>
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
      <Modal>
        <FreelanceFormContainer />
      </Modal>
    </>
  );
};
