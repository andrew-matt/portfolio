import { FC } from 'react';

import style from './Project.module.scss';

type ProjectPropsType = {
  title: string;
  description: string;
  image: string;
};

export const Project: FC<ProjectPropsType> = ({ title, image, description }) => {
  return (
    <div className={style.container}>
      <div>
        <div className={style.project}>
          <div className={style.imageWrapper}>
            <img src={image} className={style.image} alt="project" />
          </div>
          <div className={style.content}>
            <div className={style.title}>{title}</div>
            <div className={style.description}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
