import { useRef } from 'react';
import styled from '@emotion/styled';
import { BsMusicNoteList } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '@firebase/app';
import { useDispatch } from 'react-redux';

import { showSidebar } from '../../actions';
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
  MusicList,
  Path,
} from '../../components';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Home = styled(({ className }) => {
  const audioElement = useRef();
  const [loggedUser] = useAuthState(firebase.auth());
  const dispatch = useDispatch();

  if (!loggedUser) return <SignIn NextPageComponent={Home} />;

  return (
    <AudioDependenciesProvider audioElement={audioElement}>
      <div className={className}>
        <div>
          <Path />
          <Audio ref={audioElement} />
        </div>
        <MusicList
          list={['Nature.wav', 'Restaurant.wav', '1000Hz.wav', '1100Hz.wav']}
        />
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
            left={[
              <ToolbarItem
                key="list"
                icon={<BsMusicNoteList />}
                onClick={() => dispatch(showSidebar())}
              />,
            ]}
            center={[<PlayPauseButton key="play" />]}
            right={[<SignOutButton key="signout" />]}
          />
        </AppWrapper>
        <div id="modal-wrapper" />
      </div>
    </AudioDependenciesProvider>
  );
});
