import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './LanguageDictionaryList.less';

interface LanguageDictionaryListProps {
  values: {
    [lang: string]: string;
  };
}

const LanguageDictionaryList: FC<LanguageDictionaryListProps> = ({
  values,
}) => {
  return (
    <Styled styles={styles}>
      <ul className="language-dictionary-list">
        {Object.keys(values).map((lang) => (
          <li key={lang}>
            <span className="lang">{lang}</span>
            {values[lang]}
          </li>
        ))}
      </ul>
    </Styled>
  );
};

export default LanguageDictionaryList;
