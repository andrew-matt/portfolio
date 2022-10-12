import { FC } from 'react';

import questionCards from 'assets/images/Question-cards.jpg';
import socialNetwork from 'assets/images/Social-network.jpg';
import todoList from 'assets/images/Todolist.png';
import { Title } from 'common/components/title/Title';
import { Project } from 'components/projects/project/Project';
import style from 'components/projects/Projects.module.scss';
import {
  QuestionCardsFeatures,
  SocialNetworkFeatures,
  TodolistFeatures,
} from 'components/projects/projectsFeatures/projectsFeatures';
import {
  questionCardsLink,
  socialNetworkLink,
  todolistLink,
} from 'components/projects/projectsLinks/projectsLinks';

const Fade = require('react-reveal/Fade');

export const Projects: FC = () => {
  return (
    <Fade bottom>
      <div id="projects" className={style.projectsBlock}>
        <div className={style.container}>
          <Fade bottom>
            <Title title="My Projects" />
          </Fade>
          <Fade bottom>
            <div className={style.projects}>
              <Project
                title="TODOLIST"
                image={todoList}
                link={todolistLink}
                features={TodolistFeatures}
              />
              <Project
                title="SOCIAL NETWORK"
                image={socialNetwork}
                link={socialNetworkLink}
                features={SocialNetworkFeatures}
              />
              <Project
                title="QUESTION CARDS"
                image={questionCards}
                link={questionCardsLink}
                features={QuestionCardsFeatures}
              />
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};
