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

it('displays titles that are passed', () => {
  const titles: { [lang: string]: string } = {
    en: 'Cowboy Bebop',
    en_jp: 'Cowboy Bebop',
    ja_jp: 'カウボーイビバップ',
  };

  const wrapper = shallow(<Titles titles={titles} />);

  for (const lang in titles) {
    const node = wrapper.findWhere((el) => el.key() === lang);
    expect(node).toExist();

    expect(node).toIncludeText(lang);
    expect(node).toIncludeText(titles[lang]);
  }
});

it('snapshot has only a "[en] Cowboy Bebop" item', () => {
  const renderTree = renderer
    .create(<Titles titles={{ en: 'Cowboy Bebop' }} />)
    .toJSON();
  expect(renderTree).toMatchSnapshot();
});
