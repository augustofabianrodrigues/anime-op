import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ReactPlayer from 'react-player';
import YoutubeVideoPlayer from './YoutubeVideoPlayer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YoutubeVideoPlayer youtubeVideoId="qig4KOK2R2g" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('works without a video id', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YoutubeVideoPlayer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays the video player when an id is passed', () => {
  const wrapper = shallow(<YoutubeVideoPlayer youtubeVideoId="qig4KOK2R2g" />);
  expect(wrapper.find(ReactPlayer)).toExist();
});

it('displays "Video not available" when no video id is passed', () => {
  const wrapper = shallow(<YoutubeVideoPlayer />);
  expect(wrapper.find('.video-not-available')).toIncludeText(
    'Video not available'
  );
});
