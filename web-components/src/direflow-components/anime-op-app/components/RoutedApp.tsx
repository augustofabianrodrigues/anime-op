import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

interface AppProps {
  componentTitle: string;
  sampleList: string[];
}

const RoutedApp: FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <App {...props} />
    </BrowserRouter>
  );
};

RoutedApp.defaultProps = {
  componentTitle: 'Web Components',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
};

export default RoutedApp;
