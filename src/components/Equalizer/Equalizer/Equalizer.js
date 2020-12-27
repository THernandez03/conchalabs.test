import { Children, cloneElement, useEffect, useContext, useState } from 'react';
import styled from '@emotion/styled';

import { AudioDependenciesContext } from '../../AudioDependenciesProvider';

export const Equalizer = styled(({ className, children }) => {
  const [sliders, setSliders] = useState();
  const [audioDependencies] = useContext(AudioDependenciesContext);
  const { audioContext, mediaSource } = audioDependencies;

  useEffect(() => {
    if (!audioContext || !mediaSource) return;

    const cloned = Children.map(children, (child) =>
      cloneElement(child, {
        filter: audioContext.createBiquadFilter(),
      }),
    );

    mediaSource.disconnect();
    const filter = cloned.reduce(
      (acc, child) => mediaSource.connect(child.props.filter),
      mediaSource,
    );
    filter.connect(audioContext.destination);

    setSliders(cloned);
  }, [audioContext, mediaSource, children]);

  return <div className={className}>{sliders}</div>;
})`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;
