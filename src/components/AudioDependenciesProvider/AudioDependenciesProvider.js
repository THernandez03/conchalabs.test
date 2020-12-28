import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const AudioDependenciesContext = createContext({});

export const AudioDependenciesProvider = ({ children, audioElement }) => {
  const [audioDependencies, setAudioDependencies] = useState({});

  useEffect(() => {
    if (!audioElement.current) return;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    const mediaSource = audioContext?.createMediaElementSource(
      audioElement.current,
    );

    setAudioDependencies({ audioContext, mediaSource, audioElement });
  }, [audioElement]);

  return (
    <AudioDependenciesContext.Provider value={audioDependencies}>
      {children}
    </AudioDependenciesContext.Provider>
  );
};

AudioDependenciesProvider.propTypes = {
  audioElement: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

AudioDependenciesProvider.defaultProps = {};
