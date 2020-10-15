import React from 'react';
import { shallow } from 'enzyme';
import GenreStore from '../../../../stores/GenreStore';
import Genre from './Genre';
import LabeledCheckbox from '../../../shared/LabeledCheckbox';

afterEach(() => {
  GenreStore.replace([]);
});

it('returns null when GenreStore is empty', () => {
  GenreStore.replace([]);
  const wrapper = shallow(<Genre values={[]} onChange={jest.fn()} />);
  expect(wrapper).toBeEmptyRender();
});

it('renders LabeledCheckbox`es with labels equals to GenreStore names', () => {
  GenreStore.replace([
    {
      name: 'Fantasy',
      slug: 'fantasy',
    },
    {
      name: 'Sci-fi',
      slug: 'sci-fi',
    },
    {
      name: 'Adventure',
      slug: 'adventure',
    },
  ]);

  const wrapper = shallow(<Genre values={[]} onChange={jest.fn()} />);

  const labels = wrapper
    .find(LabeledCheckbox)
    .map((checkbox) => checkbox.prop('label'));

  expect(labels).toEqual(['Fantasy', 'Sci-fi', 'Adventure']);
});
