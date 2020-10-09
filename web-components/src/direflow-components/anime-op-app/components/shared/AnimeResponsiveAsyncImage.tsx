import React, { FC } from 'react';
import AnimeImageModel from '../../models/AnimeImageModel';
import LazyAsyncImage from './LazyAsyncImage';

interface AnimeResponsiveAsyncImageProps {
  alt: string;
  image: AnimeImageModel;
}

function getImageSrcSet(image: AnimeImageModel): string {
  const images: { src: string; width: number }[] = [];

  if (image.tiny && image.meta?.dimensions?.tiny?.width) {
    images.push({
      src: image.tiny,
      width: image.meta.dimensions.tiny.width,
    });
  }

  if (image.small && image.meta?.dimensions?.small?.width) {
    images.push({
      src: image.small,
      width: image.meta.dimensions.small.width,
    });
  }

  if (image.medium && image.meta?.dimensions?.medium?.width) {
    images.push({
      src: image.medium,
      width: image.meta.dimensions.medium.width,
    });
  }

  if (image.large && image.meta?.dimensions?.large?.width) {
    images.push({
      src: image.large,
      width: image.meta.dimensions.large.width,
    });
  }

  return images.map((image) => `${image.src} ${image.width}w`).join(', ');
}

const AnimeResponsiveAsyncImage: FC<AnimeResponsiveAsyncImageProps> = ({
  alt,
  image,
}) => {
  return (
    <LazyAsyncImage
      alt={alt}
      src={image.original}
      srcSet={getImageSrcSet(image)}
    />
  );
};

export default AnimeResponsiveAsyncImage;
