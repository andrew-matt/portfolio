import { FC, SyntheticEvent } from 'react';

import style from './Project.module.scss';

type ProjectPropsType = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export const Project: FC<ProjectPropsType> = ({ title, image, description, link }) => {
  const onLinkClickHandler = (event: SyntheticEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    if (event.type === 'click') {
      window.open(link);
    }
  };

  return (
    <div className={style.container}>
      <a onClick={onLinkClickHandler} href={link} className={style.link}>
        <div className={style.project}>
          <div className={style.imageWrapper}>
            <img src={image} className={style.image} alt="project" />
          </div>
          <div className={style.content}>
            <div className={style.title}>{title}</div>
            <div className={style.description}>{description}</div>
          </div>
        </div>
      </a>
    </div>
  );
};
