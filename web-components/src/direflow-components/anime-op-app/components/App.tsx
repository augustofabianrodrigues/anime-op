import React, { FC, useContext } from 'react';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.less';

interface AppProps {
  componentTitle: string;
  sampleList: string[];
}

const App: FC<AppProps> = (props) => {
  const dispatch = useContext(EventContext);

  const handleClick = () => {
    const event = new Event('my-event');
    dispatch(event);
  };

  return (
    <Styled styles={styles} scoped={false}>
      <div className="app">
        <h1>
          Anime OP UI goes here ;)
        </h1>
      </div>
    </Styled>
  );
};

App.defaultProps = {
  componentTitle: 'Web Components',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
};

export default App;
