import React from 'react';
import { shallow } from 'enzyme';
import ReactPlayer from 'react-player';
import AnimeMedia from './AnimeMedia';
import AnimeResponsiveAsyncImage from '../shared/AnimeResponsiveAsyncImage';

it('displays ReactPlayer with the youtube url when a youtubeVideoId is passed', () => {
  const wrapper = shallow(
    <AnimeMedia
      canonicalTitle="Nanatsu no Taizai"
      youtubeVideoId="wxcvbL6o55M"
      coverImage={{
        original:
          'https://media.kitsu.io/anime/cover_images/8699/original.jpg?1597701666',
      }}
    />
  );

  expect(
    wrapper.contains(
      <ReactPlayer
        controls={true}
        width="100%"
        height="18rem"
        url="https://www.youtube.com/watch?v=wxcvbL6o55M"
      />
    )
  ).toBeTruthy();
});

it('displays the cover image when coverImage.original is passed', () => {
  const wrapper = shallow(
    <AnimeMedia
      canonicalTitle="Nanatsu no Taizai"
      coverImage={{
        original:
          'https://media.kitsu.io/anime/cover_images/8699/original.jpg?1597701666',
      }}
    />
  );

  expect(
    wrapper.contains(
      <AnimeResponsiveAsyncImage
        alt="Nanatsu no Taizai Cover"
        image={{
          original:
            'https://media.kitsu.io/anime/cover_images/8699/original.jpg?1597701666',
        }}
      />
    )
  ).toBeTruthy();
});

it('displays .media-not-available when neither coverImage or youtubeVideoId are present', () => {
  const wrapper = shallow(<AnimeMedia canonicalTitle="Nanatsu no Taizai" />);
  expect(wrapper.find('.media-not-available')).toExist();
});
