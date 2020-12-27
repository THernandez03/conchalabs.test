import { useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { BsMusicNoteList } from 'react-icons/bs';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';

import { SignIn } from '../SignIn';
import {
  Audio,
  Equalizer,
  EqualizerSlider,
  Toolbar,
  ToolbarItem,
  PlayPauseButton,
  SignOutButton,
  AudioDependenciesProvider,
} from '../../components';

const SetupWrapper = styled.div``;
const AppWrapper = styled.div``;

export const Home = styled(({ className }) => {
  const audioElement = useRef();
  const isAuthenticated = useSelector((state) => state.user);

  if (!isAuthenticated) return <SignIn NextPageComponent={Home} />;

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
              <PlayPauseButton key="play" />,
              <ToolbarItem key="next" icon={<BiSkipNext />} />,
            ]}
            right={[<SignOutButton key="signout" />]}
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
