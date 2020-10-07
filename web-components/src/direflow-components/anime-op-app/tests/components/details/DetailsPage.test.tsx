import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import DetailsPage from '../../../components/details/DetailsPage';
import LoadAnimeDetailsEvent from '../../../events/LoadAnimeDetailEvent';

jest.mock('../../../events/LoadAnimeDetailEvent');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <DetailsPage />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('dispatches LoadAnimeDetailEvent on navigation to /details/:animeId', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/details/1']}>
      <DetailsPage />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);

  expect(LoadAnimeDetailsEvent).toBeCalled();
});
