import React, { FC, useContext, useEffect } from 'react';
import { EventContext, Styled } from 'direflow-component';
import ReactPlayer from 'react-player';
import styles from './DetailsPage.less';
import DetailsPageHeader from './DetailsPageHeader';
import StarsRating from '../shared/StarsRating';
import Subtype from '../shared/Subtype';
import AnimeSubtypeEnum from '../../models/AnimeSubtypeEnum';
import { useRouteMatch } from 'react-router-dom';
import LoadAnimeDetailsEvent from '../../events/LoadAnimeDetailsEvent';

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

  return (
    <Styled styles={styles}>
      <div className="details-page">
        <DetailsPageHeader />

        <main className="content">
          <section className="player">
            <ReactPlayer
              controls={true}
              width="100%"
              height="18rem"
              url="https://www.youtube.com/watch?v=wxcvbL6o55M"
            />
          </section>

          <section className="main-info">
            <h2 className="title">Nanatsu no Taizai: Seisen no Shirushi</h2>
            <div className="subtype-and-rating">
              <StarsRating averageRating={90} />
              <Subtype value={AnimeSubtypeEnum.TV} />
            </div>
            <div className="episode-count">24 episodes</div>
          </section>

          <section className="synopsis regular-section">
            <h3 className="section-title">Synopsis</h3>
            <p>
              Having taken the kingdom of Leones back from Holy Knights, the
              Seven Deadly Sins, along with Elizabeth and Hawk, can finally
              enjoy the peaceful lives they earned. However, with premonitions
              of a new threat looming, their happy, ordinary days are about to
              end... (Source: ANN, edited)
            </p>
          </section>

          <section className="age-rating regular-section">
            <h3 className="section-title">Age Rating</h3>
            <p>PG - Teens 13 or older</p>
          </section>

          <section className="genres regular-section">
            <h3 className="section-title">Genres</h3>
            <p>Magic, Supernatural, Fantasy, Action</p>
          </section>

          <section className="categories regular-section">
            <h3 className="section-title">Categories</h3>
            <p>Fantasy, Action, Adventure</p>
          </section>

          <section className="titles regular-section">
            <h3 className="section-title">Titles</h3>
            <ul className="titles-list">
              <li>
                <span className="lang">en</span>The Seven Deadly Sins: Signs of
                Holy War
              </li>

              <li>
                <span className="lang">en_jp</span>Nanatsu no Taizai: Seisen no
                Shirushi
              </li>

              <li>
                <span className="lang">en_us</span>The Seven Deadly Sins: Signs
                of Holy War
              </li>

              <li>
                <span className="lang">jp_jp</span>七つの大罪 聖戦の予兆
              </li>
            </ul>
          </section>

          <section className="streamers regular-section">
            <h3 className="section-title">Streamers</h3>
            <ul className="streamer-list">
              <li>
                <a href="https://www.netflix.com/search?q=nanatsu%20no%20taizai">
                  Netflix
                </a>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </Styled>
  );
};

export default DetailsPage;
