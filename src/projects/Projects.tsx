import { FC } from 'react';

import questionCards from '../assets/images/Question-cards.jpg';
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
                features={[
                  { id: 1, text: 'authorization' },
                  { id: 2, text: 'creating, editing, deleting lists and tasks' },
                  { id: 3, text: 'filtering tasks based on their status' },
                ]}
              />
              <Project
                title="SOCIAL NETWORK"
                image={socialNetwork}
                link={socialNetworkLink}
                features={[
                  { id: 1, text: 'authorization' },
                  { id: 2, text: 'profile editing' },
                  { id: 3, text: 'navigating through user pages' },
                  { id: 4, text: 'subscribing and unsubscribing from users' },
                  { id: 5, text: 'adding posts' },
                  { id: 6, text: 'pagination' },
                ]}
              />
              <Project
                title="QUESTION CARDS"
                image={questionCards}
                link={questionCardsLink}
                features={[
                  { id: 1, text: 'authorization' },
                  { id: 2, text: 'password recovery' },
                  { id: 3, text: 'creating, editing, deleting packs and cards' },
                  { id: 4, text: 'packs and cards search and sorting' },
                  { id: 5, text: 'answering cards questions, grading their difficulty' },
                  {
                    id: 6,
                    text: 'displaying questions randomly depending on their grade',
                  },
                  { id: 7, text: 'pagination' },
                ]}
              />
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};
