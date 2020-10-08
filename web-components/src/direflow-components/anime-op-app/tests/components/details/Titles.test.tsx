import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Titles from '../../../components/details/Titles';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Titles
      titles={{
        en: 'Cowboy Bebop',
        en_jp: 'Cowboy Bebop',
        ja_jp: 'カウボーイビバップ',
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('works without titles', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Titles titles={{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot has only a "[en] Cowboy Bebop" item', () => {
  const renderTree = renderer
    .create(<Titles titles={{ en: 'Cowboy Bebop' }} />)
    .toJSON();
  expect(renderTree).toMatchSnapshot();
});
