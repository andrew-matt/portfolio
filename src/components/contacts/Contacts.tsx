import * as React from 'react';
import { FC } from 'react';

import { Title } from 'common/components/title/Title';
import style from 'components/contacts/Contacts.module.scss';
import { ContactsFormContainer } from 'components/contacts/contactsFormContainer/ContactsFormContainer';

const Fade = require('react-reveal/Fade');

export const Contacts: FC = () => {
  return (
    <Fade bottom>
      <div id="contacts" className={style.block}>
        <div className={style.container}>
          <Fade bottom>
            <Title title="Contact With Me" />
          </Fade>
          <Fade bottom>
            <div className={style.formWrapper}>
              <ContactsFormContainer />
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};
