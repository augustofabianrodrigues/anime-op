import React, { FC, useContext, useEffect } from 'react';
import { EventContext, Styled } from 'direflow-component';
import { useStoreState } from 'pullstate';
import styles from './DetailsPage.less';
import DetailsPageHeader from './DetailsPageHeader';
import { useRouteMatch } from 'react-router-dom';
import LoadAnimeDetailsEvent from '../../events/LoadAnimeDetailEvent';
import AnimeDetailStore from '../../stores/AnimeDetailStore';
import useScrollReset from '../../hooks/useScrollReset';
import YoutubeVideoPlayer from './YoutubeVideoPlayer';
import { empty } from '../../models/Optional';
import MainInfo from './MainInfo';
import RegularSection from './RegularSection';
import Titles from './Titles';
import Streamers from './Streamers';
import CharacterGallery from './CharacterGallery';
import AnimeDetailModel from '../../models/AnimeDetailModel';
import ContentSkeletonLoader from './ContentSkeletonLoader';

const renderContent = (animeDetail: AnimeDetailModel) => {
  return (
    <main className="content">
      <YoutubeVideoPlayer youtubeVideoId={animeDetail.youtubeVideoId} />

      <MainInfo
        canonicalTitle={animeDetail.canonicalTitle}
        averageRating={animeDetail.averageRating}
        subtype={animeDetail.subtype}
        episodeCount={animeDetail.episodeCount}
      />

      <RegularSection title="Synopsis" className="synopsis">
        <p>{animeDetail.synopsis || 'N/A'}</p>
      </RegularSection>

      <RegularSection title="Age Rating" className="age-rating ">
        <p>
          {animeDetail.ageRating} - {animeDetail.ageRatingGuide}
        </p>
      </RegularSection>

      <RegularSection title="Genres" className="genres">
        <p>
          {animeDetail.genres.map((genre) => genre.name).join(', ') || 'N/A'}
        </p>
      </RegularSection>

      <RegularSection title="Categories" className="categories">
        <p>
          {animeDetail.categories
            .map((category) => category.title)
            .join(', ') || 'N/A'}
        </p>
      </RegularSection>

      <Titles titles={animeDetail.titles} />
      <Streamers streamers={animeDetail.streamers} />

      <CharacterGallery characters={animeDetail.characters} />
    </main>
  );
};

const renderLoader = () => {
  return <ContentSkeletonLoader />;
};

const DetailsPage: FC = () => {
  const dispatch = useContext(EventContext);
  const match = useRouteMatch<{ animeId: string }>({
    path: '/details/:animeId',
    exact: true,
  });

  const animeId = match?.params.animeId;

  useScrollReset();
  useEffect(() => {
    AnimeDetailStore.replace(empty());

    if (animeId) {
      dispatch(new LoadAnimeDetailsEvent(animeId));
    }
  }, [dispatch, animeId]);

  const animeDetail = useStoreState(AnimeDetailStore);

  return (
    <Styled styles={styles}>
      <div className="details-page">
        <DetailsPageHeader />
        {animeDetail ? renderContent(animeDetail) : renderLoader()}
      </div>
    </Styled>
  );
};

export default DetailsPage;
