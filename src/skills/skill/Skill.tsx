import { FC, ReactNode } from 'react';

import style from './Skill.module.scss';

type SkillPropsType = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const Skill: FC<SkillPropsType> = ({ title, description, icon }) => {
  return (
    <div className={style.container}>
      <div className={style.skill}>
        <div className={style.icon}>{icon}</div>
        <h4 className={style.title}>{title}</h4>
        <div className={style.description}>{description}</div>
      </div>
    </div>
  );
};
