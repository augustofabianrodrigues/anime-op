import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppProps from './AppProps';

const RoutedApp: FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <App {...props} />
    </BrowserRouter>
  );
};

RoutedApp.defaultProps = {
  searchResults: {
    hasMore: false,
    loading: false,
    items: [],
  },
  genres: []
};

export default RoutedApp;
