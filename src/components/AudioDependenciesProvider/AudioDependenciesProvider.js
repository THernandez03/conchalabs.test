import { createContext, useEffect, useState } from 'react';

export const AudioDependenciesContext = createContext([]);

export const AudioDependenciesProvider = ({ children, audioElement }) => {
  const [audioDependencies, setAudioDependencies] = useState({});

  useEffect(() => {
    if (!audioElement.current) return;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    const mediaSource = audioContext?.createMediaElementSource(
      audioElement.current,
    );

    setAudioDependencies({ audioContext, mediaSource });
  }, [audioElement]);

  return (
    <AudioDependenciesContext.Provider
      value={[audioDependencies, setAudioDependencies]}
    >
      {children}
    </AudioDependenciesContext.Provider>
  );
};
