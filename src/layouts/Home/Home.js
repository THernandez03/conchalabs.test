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
  AudioDependenciesProvider,
} from '../../components';

const SetupWrapper = styled.div``;
const AppWrapper = styled.div``;

export const Home = styled(({ className }) => {
  const audioElement = useRef();

  return (
    <AudioDependenciesProvider audioElement={audioElement}>
      <div className={className}>
        <SetupWrapper>
          <Audio ref={audioElement} />
        </SetupWrapper>
        <AppWrapper>
          <Equalizer>
            <EqualizerSlider type="lowpass" frequency={{ value: 1000 }} />
            <EqualizerSlider
              type="bandpass"
              frequency={{ minValue: 1000, maxValue: 4000 }}
            />
            <EqualizerSlider type="highpass" frequency={{ value: 4000 }} />
          </Equalizer>
          <Toolbar
            size="1.5rem"
            left={[<ToolbarItem key="music" icon={<BsMusicNoteList />} />]}
            center={[
              <ToolbarItem key="prev" icon={<BiSkipPrevious />} />,
              <PlayPause key="play" />,
              <ToolbarItem key="next" icon={<BiSkipNext />} />,
            ]}
          />
        </AppWrapper>
        <div id="modal-wrapper" />
      </div>
    </AudioDependenciesProvider>
  );
})`
  > ${AppWrapper} {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
