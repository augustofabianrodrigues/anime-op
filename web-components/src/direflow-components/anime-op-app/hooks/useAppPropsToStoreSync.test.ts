import React, { createElement, FC, useEffect } from 'react';
import { shallow } from 'enzyme';
import AppProps from '../components/AppProps';
import useAppPropsToStoreSync from './useAppPropsToStoreSync';
import SearchStore from '../stores/SearchStore';
import GenreStore from '../stores/GenreStore';
import AnimeDetailStore from '../stores/AnimeDetailStore';
import AgeRatingEnum from '../models/AgeRatingEnum';
import { empty } from '../models/Optional';

const TestComponent: FC<AppProps> = (props) => {
  console.log('passou fatiou');
  useAppPropsToStoreSync(props);
  return null;
};

beforeAll(() => {
  jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
});

afterAll(() => {
  jest.spyOn(React, 'useEffect').mockClear();
});

it('syncs searchResults prop with SearchStore', () => {
  const fn = jest.fn();
  const unsubscribe = SearchStore.subscribe(
    (state) => state.results,
    (watched) => fn(watched)
  );

  const wrapper = shallow(
    createElement(TestComponent, {
      animeDetail: undefined,
      searchResults: {
        hasMore: false,
        loading: false,
        items: [],
      },
      genres: [],
    })
  );

  wrapper.setProps({
    searchResults: {
      hasMore: false,
      loading: false,
      items: [
        {
          id: '8699',
          canonicalTitle: 'Nanatsu no Taizai',
          averageRating: 83.33,
          episodeCount: 24,
        },
      ],
    },
  });

  wrapper.setProps({
    searchResults: {
      hasMore: true,
      loading: true,
      items: [],
    },
  });

  expect(fn).toHaveBeenNthCalledWith(1, {
    hasMore: false,
    loading: false,
    items: [
      {
        id: '8699',
        canonicalTitle: 'Nanatsu no Taizai',
        averageRating: 83.33,
        episodeCount: 24,
      },
    ],
  });

  expect(fn).toHaveBeenNthCalledWith(2, {
    hasMore: true,
    loading: true,
    items: [],
  });

  unsubscribe();
});

it('syncs genres prop with GenreStore', () => {
  const fn = jest.fn();
  const unsubscribe = GenreStore.subscribe(
    (state) => state,
    (watched) => fn(watched)
  );

  const wrapper = shallow(
    createElement(TestComponent, {
      animeDetail: undefined,
      searchResults: {
        hasMore: false,
        loading: false,
        items: [],
      },
      genres: [],
    })
  );

  wrapper.setProps({
    genres: [
      { slug: 'fantasy', name: 'Fantasy' },
      { slug: 'sci-fi', name: 'Sci-fi' },
      { slug: 'Adventure', name: 'adventure' },
    ],
  });

  expect(fn).toBeCalledWith([
    { slug: 'fantasy', name: 'Fantasy' },
    { slug: 'sci-fi', name: 'Sci-fi' },
    { slug: 'Adventure', name: 'adventure' },
  ]);

  unsubscribe();
});

it('syncs animeDetail prop with AnimeDetailStore', () => {
  const fn = jest.fn();
  const unsubscribe = AnimeDetailStore.subscribe(
    (state) => state,
    (watched) => fn(watched)
  );

  const wrapper = shallow(
    createElement(TestComponent, {
      animeDetail: undefined,
      searchResults: {
        hasMore: false,
        loading: false,
        items: [],
      },
      genres: [],
    })
  );

  wrapper.setProps({
    animeDetail: {
      id: '8699',
      canonicalTitle: 'Nanatsu no Taizai',
      titles: {},
      categories: [],
      characters: [],
      genres: [],
      streamers: [],
      ageRating: AgeRatingEnum.ParentalGuidanceSuggested,
      ageRatingGuide: '',
      averageRating: 83.33,
      episodeCount: 24,
    },
  });

  wrapper.setProps({
    animeDetail: null,
  });

  expect(fn).toHaveBeenNthCalledWith(1, {
    id: '8699',
    canonicalTitle: 'Nanatsu no Taizai',
    titles: {},
    categories: [],
    characters: [],
    genres: [],
    streamers: [],
    ageRating: AgeRatingEnum.ParentalGuidanceSuggested,
    ageRatingGuide: '',
    averageRating: 83.33,
    episodeCount: 24,
  });

  expect(fn).toHaveBeenNthCalledWith(2, null);

  unsubscribe();
});
