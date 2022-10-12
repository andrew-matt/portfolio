import * as React from 'react';
import { FC } from 'react';

import style from 'app/App.module.scss';
import { SnackBar } from 'common/components/snackbar/SnackBar';
import { Contacts } from 'components/contacts/Contacts';
import { Footer } from 'components/footer/Footer';
import { Freelance } from 'components/freelance/Freelance';
import { Header } from 'components/header/Header';
import { Main } from 'components/main/Main';
import { Projects } from 'components/projects/Projects';
import { Skills } from 'components/skills/Skills';

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
      <SnackBar />
    </div>
  );
};
