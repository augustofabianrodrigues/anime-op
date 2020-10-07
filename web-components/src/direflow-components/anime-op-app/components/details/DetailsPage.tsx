import React, { FC, useContext, useEffect } from 'react';
import { EventContext, Styled } from 'direflow-component';
import ReactPlayer from 'react-player';
import { useStoreState } from 'pullstate';
import styles from './DetailsPage.less';
import DetailsPageHeader from './DetailsPageHeader';
import StarsRating from '../shared/StarsRating';
import Subtype from '../shared/Subtype';
import { useRouteMatch } from 'react-router-dom';
import LoadAnimeDetailsEvent from '../../events/LoadAnimeDetailEvent';
import AnimeDetailStore from '../../stores/AnimeDetailStore';

const DetailsPage: FC = () => {
  const dispatch = useContext(EventContext);
  const match = useRouteMatch<{ animeId: string }>({
    path: '/details/:animeId',
    exact: true,
  });

  const animeId = match?.params.animeId;

  useEffect(() => {
    if (animeId) {
      dispatch(new LoadAnimeDetailsEvent(animeId));
    }
  }, [dispatch, animeId]);

  const animeDetail = useStoreState(AnimeDetailStore);
  if (!animeDetail) return <p>Loading...</p>;

  const youtubeVideoUrl =
    animeDetail.youtubeVideoId &&
    `https://www.youtube.com/watch?v=${animeDetail.youtubeVideoId}`;

  return (
    <Styled styles={styles}>
      <div className="details-page">
        <DetailsPageHeader />

        <main className="content">
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

          <section className="main-info">
            <h2 className="title">{animeDetail.canonicalTitle}</h2>
            <div className="subtype-and-rating">
              {animeDetail.averageRating && (
                <StarsRating averageRating={animeDetail.averageRating} />
              )}
              {animeDetail.subtype && <Subtype value={animeDetail.subtype} />}
            </div>
            {animeDetail.episodeCount && (
              <div className="episode-count">
                {animeDetail.episodeCount} episodes
              </div>
            )}
          </section>

          <section className="synopsis regular-section">
            <h3 className="section-title">Synopsis</h3>
            <p>{animeDetail.synopsis || 'N/A'}</p>
          </section>

          <section className="age-rating regular-section">
            <h3 className="section-title">Age Rating</h3>
            <p>
              {animeDetail.ageRating} - {animeDetail.ageRatingGuide}
            </p>
          </section>

          <section className="genres regular-section">
            <h3 className="section-title">Genres</h3>
            <p>{animeDetail.genres.map((genre) => genre.name).join(', ')}</p>
          </section>

          <section className="categories regular-section">
            <h3 className="section-title">Categories</h3>
            <p>
              {animeDetail.categories
                .map((category) => category.title)
                .join(', ')}
            </p>
          </section>

          <section className="titles regular-section">
            <h3 className="section-title">Titles</h3>
            <ul className="titles-list">
              {Object.keys(animeDetail.titles).map((lang) => (
                <li key={lang}>
                  <span className="lang">{lang}</span>
                  {animeDetail.titles[lang]}
                </li>
              ))}
            </ul>
          </section>

          <section className="streamers regular-section">
            <h3 className="section-title">Streamers</h3>
            <ul className="streamer-list">
              {animeDetail.streamers.map((streamer) => (
                <li key={streamer.id}>
                  <a href={streamer.url}>{streamer.siteName}</a>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </Styled>
  );
};

export default DetailsPage;
