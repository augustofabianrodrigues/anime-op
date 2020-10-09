import React from 'react';
import { shallow } from 'enzyme';
import LanguageDictionaryList from './LanguageDictionaryList';

it('displays the value pairs that are passed', () => {
  const titles: { [lang: string]: string } = {
    en: 'Cowboy Bebop',
    en_jp: 'Cowboy Bebop',
    ja_jp: 'カウボーイビバップ',
  };

  const wrapper = shallow(<LanguageDictionaryList values={titles} />);

  for (const lang in titles) {
    const node = wrapper.findWhere((el) => el.key() === lang);
    expect(node).toExist();

    expect(node).toIncludeText(lang);
    expect(node).toIncludeText(titles[lang]);
  }
});
