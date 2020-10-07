import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
// import renderer from 'react-test-renderer';
import App from '../../components/App';
import AppProps from '../../components/AppProps';
import { empty } from '../../models/Optional';

const reactProps: AppProps = {
  animeDetail: empty(),
  genres: [],
  searchResults: {
    hasMore: false,
    loading: false,
    items: [],
  },
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <App {...reactProps} />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

// it('matches snapshot as expected', () => {
//   const renderTree = renderer.create(<App {...reactProps} />).toJSON();
//   expect(renderTree).toMatchSnapshot();
// });
