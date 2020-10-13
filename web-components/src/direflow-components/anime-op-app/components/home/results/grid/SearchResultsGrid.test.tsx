import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchStore from '../../../../stores/SearchStore';
import SearchResultsGrid from './SearchResultsGrid';
import ViewTypeEnum from '../../../../models/ViewTypeEnum';

beforeEach(() => {
  SearchStore.replace({
    input: { query: '', ageRatings: [], genres: [] },
    viewType: ViewTypeEnum.Grid,
    results: {
      loading: false,
      hasMore: false,
      items: [],
    },
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchResultsGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays a skeleton loader when there are no items and they are loading', () => {
  SearchStore.replace({
    input: { query: '', ageRatings: [], genres: [] },
    viewType: ViewTypeEnum.Grid,
    results: {
      loading: true,
      hasMore: false,
      items: [],
    },
  });

  const wrapper = shallow(<SearchResultsGrid />);
  expect(wrapper.find('.search-results-grid > .skeleton-loader')).toExist();
});

it('displays items grid when there are items', () => {
  SearchStore.replace({
    input: { query: '', ageRatings: [], genres: [] },
    viewType: ViewTypeEnum.Grid,
    results: {
      loading: true,
      hasMore: false,
      items: [
        {
          id: '1142',
          canonicalTitle: 'One Piece',
        },
      ],
    },
  });

  const wrapper = shallow(<SearchResultsGrid />);
  expect(wrapper.find('.grid-column:not(.skeleton-loader)')).toExist();
});
