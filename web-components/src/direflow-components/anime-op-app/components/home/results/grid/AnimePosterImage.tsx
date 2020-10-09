import React, { FC } from 'react';
import AnimePosterImageModel from '../../../../models/AnimeImageModel';
import AnimeResponsiveAsyncImage from '../../../shared/AnimeResponsiveAsyncImage';

interface AnimePosterImageProps {
  canonicalTitle: string;
  posterImage?: AnimePosterImageModel;
}
const AnimePosterImage: FC<AnimePosterImageProps> = ({
  canonicalTitle,
  posterImage,
}) => {
  // TODO: If there is no image, return an SVG saying there is no image
  if (!posterImage || !posterImage.original) return null;

  return (
    <AnimeResponsiveAsyncImage
      alt={`${canonicalTitle} Poster`}
      image={posterImage}
    />
  );
};

export default AnimePosterImage;
