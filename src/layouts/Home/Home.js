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
          <EqualizerSlider type="lowpass" frequency={1000} />
          <EqualizerSlider type="bandpass" frequency={2500} />
          <EqualizerSlider type="highpass" frequency={4000} />
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
  );
})`
  > ${AppWrapper} {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
