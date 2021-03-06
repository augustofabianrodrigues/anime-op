import React, { FC } from 'react';
import AnimeImageModel from '../../../../models/AnimeImageModel';
import AnimeResponsiveAsyncImage from '../../../shared/AnimeResponsiveAsyncImage';
import MissingImageIllustration from './MissingImageIllustration';

interface AnimePosterImageProps {
  canonicalTitle: string;
  posterImage?: AnimeImageModel;
}
const AnimePosterImage: FC<AnimePosterImageProps> = ({
  canonicalTitle,
  posterImage,
}) => {
  if (!posterImage || !posterImage.original)
    return <MissingImageIllustration />;

  return (
    <AnimeResponsiveAsyncImage
      alt={`${canonicalTitle} Poster`}
      image={posterImage}
    />
  );
};

export default AnimePosterImage;
