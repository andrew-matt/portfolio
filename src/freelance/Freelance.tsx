import { FC } from 'react';

import style from './Freelance.module.scss';

import { Button } from 'common/components/button/Button';
import { Title } from 'common/components/title/Title';

export const Freelance: FC = () => {
  return (
    <div className={style.block}>
      <div className={style.footerContainer}>
        <Title title="I Am Available For Freelance" />
        <div>
          <Button title="HIRE ME" />
        </div>
      </div>
    </div>
  );
};
