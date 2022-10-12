import { FC, ReactNode } from 'react';

import style from 'components/skills/skill/Skill.module.scss';

type SkillPropsType = {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
};

export const Skill: FC<SkillPropsType> = ({ title, description, icon, image }) => {
  return (
    <div className={style.container}>
      <div className={style.skill}>
        <div className={style.icon}>
          {image ? <img src={image} alt="icon" style={{ width: '42px' }} /> : icon}
        </div>
        <h4 className={style.title}>{title}</h4>
        <div className={style.description}>{description}</div>
      </div>
    </div>
  );
};
