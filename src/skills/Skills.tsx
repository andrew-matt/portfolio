import { FC } from 'react';

import { faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './Skills.module.scss';

import jestLogo from 'assets/icons/Jest.png';
import reduxLogo from 'assets/icons/Redux.png';
import typeScriptLogo from 'assets/icons/Typescript.png';
import { Title } from 'common/components/title/Title';
import { Skill } from 'skills/skill/Skill';

const Fade = require('react-reveal/Fade');

export const Skills: FC = () => {
  const reactDescription =
    'Experience in creating SPA with both class and functional components and using REST APIs';

  const reduxDescription =
    'Managing and centralizing applications state, using redux-thunks for API calls';

  const typeScriptDescription =
    'Defining, composing types and interfaces, using generics, migrating from JavaScript';

  const javaScriptDescription =
    'Knowledge in native JS (promises, async/await, closure, immutability, destructuring)';

  const htmlDescription =
    'Building responsive web pages using HTML, CSS and CSS preprocessor - SASS';

  const testingDescription =
    'Testing applications functionality and workability with Jest unit and integration tests (snapshots)';

  return (
    <Fade bottom>
      <div id="skills" className={style.skillsBlock}>
        <div className={style.container}>
          <Fade bottom>
            <Title title="My Skills" />
          </Fade>
          <Fade bottom>
            <div className={style.skills}>
              <Skill
                title="React"
                description={reactDescription}
                icon={<FontAwesomeIcon icon={faReact} color="#ff014f" size="3x" />}
              />
              <Skill title="Redux" description={reduxDescription} image={reduxLogo} />
              <Skill
                title="TypeScript"
                description={typeScriptDescription}
                image={typeScriptLogo}
              />
              <Skill
                title="JavaScript"
                description={javaScriptDescription}
                icon={<FontAwesomeIcon icon={faJsSquare} color="#ff014f" size="3x" />}
              />
              <Skill
                title="HTML & CSS"
                description={htmlDescription}
                icon={<FontAwesomeIcon icon={faHtml5} color="#ff014f" size="3x" />}
              />
              <Skill title="Testing" description={testingDescription} image={jestLogo} />
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};
