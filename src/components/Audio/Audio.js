import { forwardRef, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';

import { AudioDependenciesContext } from '../AudioDependenciesProvider';
import { PLAYING, PAUSED } from '../../constants/controlStatus';

export const Audio = forwardRef((props, ref) => {
  const [{ audioContext }] = useContext(AudioDependenciesContext);
  const musicStatus = useSelector((state) => state.musicStatus);

  useEffect(() => {
    const toggleMusic = async () => {
      if (musicStatus === PLAYING) {
        await audioContext?.resume();
        ref.current.play();
      } else if (musicStatus === PAUSED) {
        ref.current.pause();
      }
    };
    toggleMusic();
  }, [ref, musicStatus, audioContext]);

  return (
    <audio
      ref={ref}
      loop
      src="try-it-now_nature_Eventually,_all_things_merge_into_one,_and_a_river_runs_through_it_burgh_gentle_stream_12.wav"
    >
      <track default kind="captions" />
    </audio>
  );
});
