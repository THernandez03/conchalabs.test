import { useEffect, forwardRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';

import { PLAYING, PAUSED } from '../../constants';

export const Audio = forwardRef((props, ref) => {
  const musicStatus = useSelector((state) => state.controls.status);

  useEffect(() => {
    if (musicStatus === PLAYING) {
      ref.current.play();
    } else if (musicStatus === PAUSED) {
      ref.current.pause();
    }
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
