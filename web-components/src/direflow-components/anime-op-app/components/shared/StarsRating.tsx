import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import Star from './Star';
import styles from './StarsRating.less';

const STARS_COUNT = 5;

interface StarsRatingProps {
  averageRating: number;
}

function renderStars(rating: number) {
  let remaining = rating;
  return Array(STARS_COUNT)
    .fill(null)
    .map((_, index) => {
      const fillRatio = remaining >= 1 ? 1 : remaining;
      remaining--;

      return <Star key={index} fillRatio={fillRatio} />;
    });
}

const StarsRating: FC<StarsRatingProps> = ({ averageRating }) => {
  const rating = (averageRating / 100) * STARS_COUNT;
  const title = `Rating: ${rating.toFixed(1)} / ${STARS_COUNT.toFixed(1)}`;

  return (
    <Styled styles={styles}>
      <span title={title} className="stars-rating">
        {renderStars(rating)}
      </span>
    </Styled>
  );
};

export default StarsRating;
