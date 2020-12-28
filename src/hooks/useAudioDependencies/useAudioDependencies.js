import { useContext } from 'react';

import { AudioDependenciesContext } from '../../components';

export const useAudioDependencies = () => useContext(AudioDependenciesContext);
