import { Children, cloneElement, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useAudioDependencies } from '../../../hooks';

const InnerWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-evenly;
  max-width: 768px;
  margin: 0 auto;
`;

export const Equalizer = styled(({ className, children }) => {
  const [sliders, setSliders] = useState();
  const { audioContext, mediaSource } = useAudioDependencies();

  useEffect(() => {
    if (!audioContext || !mediaSource || !children) return;

    const cloned = Children.map(children, (child) =>
      cloneElement(child, {
        filter: audioContext.createBiquadFilter(),
      }),
    );

    mediaSource.disconnect();
    const filter = cloned.reduce(
      (acc, child) => acc.connect(child.props.filter),
      mediaSource,
    );
    filter.connect(audioContext.destination);

    setSliders(cloned);
  }, [audioContext, mediaSource, children]);

  return (
    <div className={className}>
      <InnerWrapper>{sliders}</InnerWrapper>
    </div>
  );
})`
  display: flex;
  flex-grow: 1;
  align-items: center;
  background: #2980b9;
  background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);
  background: linear-gradient(to right, #2c3e50, #2980b9);
`;

Equalizer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

Equalizer.defaultProps = {};
