import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './Streamers.less';
import RegularSection from './RegularSection';
import StreamerModel from '../../models/StreamerModel';

interface StreamersProps {
  streamers: StreamerModel[];
}

const renderContent = (streamers: StreamerModel[]) => {
  if (!streamers.length) return 'N/A';

  return (
    <ul className="streamer-list">
      {streamers.map((streamer) => (
        <li key={streamer.id}>
          <a href={streamer.url}>{streamer.siteName}</a>
        </li>
      ))}
    </ul>
  );
};

const Streamers: FC<StreamersProps> = ({ streamers }) => {
  return (
    <Styled styles={styles}>
      <RegularSection title="Streamers" className="streamers">
        {renderContent(streamers)}
      </RegularSection>
    </Styled>
  );
};

export default Streamers;
