import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import ReactPlayer from 'react-player';
import AnimeImageModel from '../../models/AnimeImageModel';
import AnimeResponsiveAsyncImage from '../shared/AnimeResponsiveAsyncImage';
import styles from './AnimeMedia.less';

interface AnimeMediaProps {
  canonicalTitle: string;
  coverImage?: AnimeImageModel;
  youtubeVideoId?: string;
}

const renderMedia = ({
  canonicalTitle,
  coverImage,
  youtubeVideoId,
}: AnimeMediaProps) => {
  if (youtubeVideoId) {
    const youtubeVideoUrl =
      youtubeVideoId && `https://www.youtube.com/watch?v=${youtubeVideoId}`;

    return (
      <ReactPlayer
        controls={true}
        width="100%"
        height="18rem"
        url={youtubeVideoUrl}
      />
    );
  }

  if (coverImage && coverImage.original) {
    return (
      <AnimeResponsiveAsyncImage
        alt={`${canonicalTitle} Cover`}
        image={coverImage}
      />
    );
  }

  return <p className="media-not-available">Media not available</p>;
};

const AnimeMedia: FC<AnimeMediaProps> = (props) => {
  return (
    <Styled styles={styles}>
      <section className="anime-details-media">{renderMedia(props)}</section>
    </Styled>
  );
};

export default AnimeMedia;
