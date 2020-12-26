import { useState, useEffect } from 'react';

export const useAudioContext = () => {
  const [audioContext, setAudioContext] = useState();

  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    setAudioContext(new AudioContext());
  }, []);

  return audioContext;
};
