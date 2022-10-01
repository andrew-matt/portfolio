import { FC } from 'react';

import socialNetwork from '../assets/images/Social-network.jpg';
import todoList from '../assets/images/Todolist.png';

import style from './Projects.module.scss';

import { Title } from 'common/components/title/Title';
import { Project } from 'projects/project/Project';

const Fade = require('react-reveal/Fade');

export const Projects: FC = () => {
  const socialNetworkLink = 'https://andrew-matt.github.io/social-network';
  const todolistLink = 'https://andrew-matt.github.io/todolist';
  const questionCardsLink = 'https://andrew-matt.github.io/question-cards';

  return (
    <div id="projects" className={style.projectsBlock}>
      <div className={style.container}>
        <Fade bottom>
          <Title title="My Projects" />
        </Fade>
        <Fade bottom>
          <div className={style.projects}>
            <Project
              title="TODOLIST"
              description="Alias dignissimos dolor eos ex incidunt itaque iusto magnam maiores nostrum."
              image={todoList}
              link={todolistLink}
            />
            <Project
              title="SOCIAL NETWORK"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              image={socialNetwork}
              link={socialNetworkLink}
            />
            <Project
              title="QUESTION CARDS"
              description="dignissimos dolor eos ex itaque iusto magnam maiores nostrum."
              image={todoList}
              link={questionCardsLink}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};
