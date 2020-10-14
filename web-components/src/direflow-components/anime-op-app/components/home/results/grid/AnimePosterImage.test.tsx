import React from 'react';
import { shallow } from 'enzyme';
import AnimePosterImage from './AnimePosterImage';
import MissingImageIllustration from './MissingImageIllustration';
import AnimeResponsiveAsyncImage from '../../../shared/AnimeResponsiveAsyncImage';
import AnimePosterImageModel from '../../../../models/AnimeImageModel';

it('displays a missing image illustration when posterImage is undefined', () => {
  const wrapper = shallow(<AnimePosterImage canonicalTitle="Cowboy Bebop" />);
  expect(wrapper.contains(<MissingImageIllustration />)).toBeTruthy();
});

it('displays the image when posterImage.original has a value', () => {
  const posterImage: AnimePosterImageModel = {
    original:
      'https://media.kitsu.io/anime/poster_images/1/original.jpg?1597604210',
  };

  const wrapper = shallow(
    <AnimePosterImage canonicalTitle="Cowboy Bebop" posterImage={posterImage} />
  );
  expect(
    wrapper.contains(
      <AnimeResponsiveAsyncImage alt="Cowboy Bebop Poster" image={posterImage} />
    )
  ).toBeTruthy();
});
