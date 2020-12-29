import { forwardRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAudioDependencies } from '../../hooks';
import { PLAYING, PAUSED } from '../../constants/controlStatus';

export const Audio = forwardRef((props, ref) => {
  const { audioContext } = useAudioDependencies();
  const musicStatus = useSelector((state) => state.musicStatus);
  const selectedItem = useSelector((state) => state.selectedItem);

  const isPlaying = musicStatus === PLAYING;
  const isPaused = musicStatus === PAUSED;

  /* eslint-disable no-undefined */
  const src = selectedItem ? `sounds/${selectedItem}` : undefined;

  useEffect(() => {
    const toggleMusic = async () => {
      if (isPlaying) {
        await audioContext?.resume();
        ref.current.play();
      } else if (isPaused) {
        ref.current.pause();
      }
    };
    toggleMusic();
  }, [ref, musicStatus, audioContext, isPlaying, isPaused]);

  useEffect(() => {
    if (selectedItem && isPlaying) {
      ref.current.pause();
      ref.current.play();
    }
  }, [ref, selectedItem, isPlaying]);

  return (
    <audio ref={ref} loop src={src}>
      <track default kind="captions" />
    </audio>
  );
});

Audio.propTypes = {};

Audio.defaultProps = {};
