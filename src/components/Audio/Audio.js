import { useEffect, forwardRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';

import { PLAYING, PAUSED } from '../../constants/controlStatus';

export const Audio = forwardRef((props, ref) => {
  const musicStatus = useSelector((state) => state.musicStatus);
  const audioContext = useSelector((state) => state.audio.context);

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
  }, [ref, musicStatus]);

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
