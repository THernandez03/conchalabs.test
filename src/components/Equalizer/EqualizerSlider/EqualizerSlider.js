import { useEffect } from 'react';
import styled from '@emotion/styled';

export const EqualizerSlider = styled(({ className, type, frequency, gain }) => {
  //
  // const filter = useBiquadFilter({
  // type,
  // gain,
  // frequency,
  // q,
  // });
  //

  console.log({ type, frequency, gain });
  useEffect(() => {}, []);

  return (
    <input
      className={className}
      type="range"
      orient="vertical"
      min="-40"
      max="40"
    />
  );
})`
  transform: rotate(-90deg);
`;
