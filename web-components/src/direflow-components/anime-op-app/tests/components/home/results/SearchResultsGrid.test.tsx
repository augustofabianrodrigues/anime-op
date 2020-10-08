import { Store } from 'pullstate';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchResultsGrid from '../../../../components/home/results/grid/SearchResultsGrid';
import SearchStore from '../../../../stores/SearchStore';
import { empty } from '../../../../models/Optional';

beforeEach(() => {
  SearchStore.replace({
    input: { query: '', ageRatings: [], genres: [] },
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

it('displays a loading message when there are no items and they are loading', () => {
  SearchStore.replace({
    input: { query: '', ageRatings: [], genres: [] },
    results: {
      loading: true,
      hasMore: false,
      items: [],
    },
  });

  const wrapper = shallow(<SearchResultsGrid />);
  expect(wrapper.find('.search-results-grid > p')).toIncludeText('Loading');
});
