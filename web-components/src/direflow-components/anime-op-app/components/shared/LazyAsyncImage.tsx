import React, { FC, ImgHTMLAttributes } from 'react';

interface LazyAsyncImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

const LazyAsyncImage: FC<LazyAsyncImageProps> = ({ alt, ...rest }) => {
  return <img decoding="async" loading="lazy" alt={alt} {...rest} />;
};

export default LazyAsyncImage;
