import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './Titles.less';
import RegularSection from './RegularSection';

interface TitlesProps {
  titles: {
    [lang: string]: string;
  };
}

const Titles: FC<TitlesProps> = ({ titles }) => {
  return (
    <Styled styles={styles}>
      <RegularSection title="Titles" className="titles">
        <ul className="titles-list">
          {Object.keys(titles).map((lang) => (
            <li key={lang}>
              <span className="lang">{lang}</span>
              {titles[lang]}
            </li>
          ))}
        </ul>
      </RegularSection>
    </Styled>
  );
};

export default Titles;
