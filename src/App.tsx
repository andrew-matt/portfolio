import { FC } from 'react';

import style from './App.module.scss';

import { Contacts } from 'contacts/Contacts';
import { Footer } from 'footer/Footer';
import { Freelance } from 'freelance/Freelance';
import { Header } from 'header/Header';
import { Main } from 'main/Main';
import { Projects } from 'projects/Projects';
import { Skills } from 'skills/Skills';

export const App: FC = () => {
  return (
    <div className={style.App}>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Freelance />
      <Contacts />
      <Footer />
    </div>
  );
};
