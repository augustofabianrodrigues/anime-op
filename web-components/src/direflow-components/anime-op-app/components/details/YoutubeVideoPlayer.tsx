import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import ReactPlayer from 'react-player';
import styles from './YoutubeVideoPlayer.less';

interface YoutubeVideoPlayerProps {
  youtubeVideoId?: string;
}

const YoutubeVideoPlayer: FC<YoutubeVideoPlayerProps> = ({
  youtubeVideoId,
}) => {
  const youtubeVideoUrl =
    youtubeVideoId && `https://www.youtube.com/watch?v=${youtubeVideoId}`;

  return (
    <Styled styles={styles}>
      <section className="player">
        {youtubeVideoUrl ? (
          <ReactPlayer
            controls={true}
            width="100%"
            height="18rem"
            url={youtubeVideoUrl}
          />
        ) : (
          <p className="video-not-available">Video not available</p>
        )}
      </section>
    </Styled>
  );
};

export default YoutubeVideoPlayer;
