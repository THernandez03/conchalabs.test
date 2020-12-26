import { useState, useEffect } from 'react';

export const useMediaSource = (audioElement, context) => {
  const [mediaSource, setMediaSource] = useState();

  useEffect(() => {
    if (!audioElement || !context) return;

    return setMediaSource(
      context.createMediaElementSource(audioElement.current),
    );
  }, [audioElement, context]);

  return mediaSource;
};
