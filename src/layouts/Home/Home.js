import { useRef } from 'react';
import styled from '@emotion/styled';
import { BsMusicNoteList } from 'react-icons/bs';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';

import {
  Audio,
  Equalizer,
  EqualizerSlider,
  Toolbar,
  ToolbarItem,
  PlayPause,
} from '../../components';

const SetupWrapper = styled.div``;
const AppWrapper = styled.div``;

export const Home = styled(({ className }) => {
  const audioElement = useRef();

  return (
    <div className={className}>
      <SetupWrapper>
        <Audio ref={audioElement} />
      </SetupWrapper>
      <AppWrapper>
        <Equalizer source={audioElement}>
          <EqualizerSlider type="lowpass" frecuency={{ value: 1000 }} />
          <EqualizerSlider
            type="bandpass"
            frecuency={{ value: 2500, minValue: 1000, maxValue: 4000 }}
          />
          <EqualizerSlider type="highpass" frecuency={{ value: 4000 }} />
        </Equalizer>
        <Toolbar
          size="1.5rem"
          left={({ size }) => [
            <ToolbarItem key="music" icon={<BsMusicNoteList size={size} />} />,
          ]}
          center={({ size }) => [
            <ToolbarItem key="prev" icon={<BiSkipPrevious size={size} />} />,
            <PlayPause key="play" size={size} />,
            <ToolbarItem key="next" icon={<BiSkipNext size={size} />} />,
          ]}
        />
      </AppWrapper>
      <div id="modal-wrapper" />
    </div>
  );
})`
  > ${AppWrapper} {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
