import React, { FC, Fragment } from 'react';

interface StarProps {
  fillRatio: number;
}

const HEX_COLOR_FILLED = '#F6E05E';
const HEX_COLOR_EMPTY = '#718096';

function generateId (): string {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

function renderGradientOffsets(fillRatio: number) {
  if (fillRatio <= 0) {
    return <stop offset="1" stopColor={HEX_COLOR_EMPTY} />;
  }

  const beginOffsetChange = fillRatio + 0.0001;
  if (beginOffsetChange >= 1) {
    return <stop offset="1" stopColor={HEX_COLOR_FILLED} />;
  }

  return (
    <Fragment>
      <stop offset={fillRatio} stopColor={HEX_COLOR_FILLED} />
      <stop offset={beginOffsetChange} stopColor={HEX_COLOR_EMPTY} />
    </Fragment>
  );
}

const Star: FC<StarProps> = (props) => {
  const paintId = 's_' + generateId();

  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3803 2.15903L12.9553 7.37569L18.7136 8.21736L14.5469 12.2757L15.5303 18.009L10.3803 15.3007L5.23027 18.009L6.21361 12.2757L2.04694 8.21736L7.80527 7.37569L10.3803 2.15903Z"
        fill={`url(#${paintId})`}
      />
      <defs>
        <linearGradient
          id={paintId}
          x1="2.04694"
          y1="10.4924"
          x2="18.7136"
          y2="10.4924"
          gradientUnits="userSpaceOnUse"
        >
          {renderGradientOffsets(props.fillRatio)}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Star;
