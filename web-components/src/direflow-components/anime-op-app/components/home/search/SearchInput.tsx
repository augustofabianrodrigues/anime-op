import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import MagnifyingGlassIcon from '../../shared/MagnifyingGlassIcon';
import XIcon from '../../shared/XIcon';
import styles from './SearchInput.less';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const renderClearInputButton = (onClick: () => void) => {
  return (
    <button
      type="button"
      title="Clear"
      className="search-input-clear"
      onClick={onClick}
    >
      <XIcon />
    </button>
  )
};

const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
  const hasValue = +(value.trim().length !== 0);

  return (
    <Styled styles={styles}>
      <div className="search-input">
        <input
          type="text"
          name="query"
          placeholder="Search for any anime here"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <SwitchTransition mode="out-in">
          <CSSTransition
            key={hasValue}
            classNames="change-search-icon"
            timeout={200}
            addEndListener={(node, done) =>
              node.addEventListener('transitionend', done, false)
            }
          >
            {hasValue
              ? renderClearInputButton(() => onChange(''))
              : <MagnifyingGlassIcon />
            }
          </CSSTransition>
        </SwitchTransition>
      </div>
    </Styled>
  );
};

export default SearchInput;
