import { FC } from 'react';

import { faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import jestLogo from 'assets/icons/Jest.png';
import reduxLogo from 'assets/icons/Redux.png';
import typeScriptLogo from 'assets/icons/Typescript.png';
import { Title } from 'common/components/title/Title';
import { Skill } from 'components/skills/skill/Skill';
import style from 'components/skills/Skills.module.scss';
import {
  htmlDescription,
  javaScriptDescription,
  reactDescription,
  reduxDescription,
  testingDescription,
  typeScriptDescription,
} from 'components/skills/skillsDescription/skillsDescription';

const Fade = require('react-reveal/Fade');

export const Skills: FC = () => {
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
