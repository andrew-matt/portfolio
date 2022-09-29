import { FC } from 'react';

import socialNetwork from '../assets/images/Social-network.jpg';
import todoList from '../assets/images/Todolist.png';

import style from './Projects.module.scss';

import { Title } from 'common/components/title/Title';
import { Project } from 'projects/project/Project';

export const Projects: FC = () => {
  return (
    <div id="projects" className={style.projectsBlock}>
      <div className={style.container}>
        <Title title="My Projects" />
        <div className={style.projects}>
          <Project
            title="SOCIAL NETWORK"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
            image={socialNetwork}
          />
          <Project
            title="TODOLIST"
            description="Alias dignissimos dolor eos ex incidunt itaque iusto magnam maiores nostrum."
            image={todoList}
          />
        </div>
      </div>
    </div>
  );
};
