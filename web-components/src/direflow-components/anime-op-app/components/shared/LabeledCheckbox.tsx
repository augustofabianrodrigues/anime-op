import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './LabeledCheckbox.less';

interface LabeledCheckboxProps {
  id?: string;
  name?: string;
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const LabeledCheckbox: FC<LabeledCheckboxProps> = ({
  id,
  name,
  label,
  value,
  onChange,
}) => {
  const toggleHandler = () => onChange(!value);

  return (
    <Styled styles={styles}>
      <div className="labeled-checkbox" onClick={toggleHandler}>
        <div
          className={classNames('labeled-checkbox-control', { active: value })}
        >
          <input
            id={id}
            type="checkbox"
            name={name}
            checked={value}
            onChange={toggleHandler}
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="labeled-checkbox-control--check"
              d="M9 11L12 14L22 4"
              stroke="#7F9CF5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="labeled-checkbox-control--square"
              d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
              stroke="#FBFDFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <label htmlFor={id}>{label}</label>
      </div>
    </Styled>
  );
};

export default LabeledCheckbox;
