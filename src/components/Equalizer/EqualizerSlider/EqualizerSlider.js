import styled from '@emotion/styled';

export const EqualizerSlider = styled(
  ({ className, type, frequency, biquadFilter }) => {
    biquadFilter.type = type;
    biquadFilter.frequency.value = frequency;

    const handleSliderChange = (event) => {
      biquadFilter.gain.value = event.target.value;
    };

    return (
      <input
        className={className}
        type="range"
        defaultValue={0}
        onChange={handleSliderChange}
        min="-40"
        max="40"
      />
    );
  },
)`
  transform: rotate(-90deg) scale(2.5);
`;
