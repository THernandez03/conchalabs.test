import { useState, useEffect } from 'react';

export const useMediaSource = (audioElement) => {
  const [mediaSource, setMediaSource] = useState();

  useEffect(() => {
    if (!audioElement) return;

    const context = new (window.AudioContext || window.webkitAudioContext)();
    setMediaSource(context.createMediaElementSource(audioElement));
  }, [audioElement]);

  return mediaSource;
};
