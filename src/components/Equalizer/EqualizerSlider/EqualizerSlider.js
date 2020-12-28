import styled from '@emotion/styled';

const RangeInput = styled.input``;

export const EqualizerSlider = styled(
  ({ className, type, filter, frequency }) => {
    const maxValue = frequency.maxValue || filter.frequency.maxValue;
    const minValue = frequency.minValue || filter.frequency.minValue;
    const centerValue = (maxValue + minValue) / 2;

    filter.type = type;
    filter.frequency.value = frequency.value || centerValue;

    if (type === 'bandpass') {
      filter.Q.value = centerValue / (maxValue - minValue);
    }

    const handleSliderChange = (event) => {
      filter.gain.value = event.target.value;
      console.log({
        frequency: filter.frequency.value,
        gain: filter.gain.value,
        qValue: filter.Q.value,
      });
    };

    return (
      <div className={className}>
        <RangeInput
          type="range"
          defaultValue={0}
          onChange={handleSliderChange}
          max="40"
          min="-40"
        />
      </div>
    );
  },
)`
  display: flex;
  width: 50px;
  position: relative;
  left: -40px;

  > ${RangeInput} {
    transform: rotate(-90deg) scale(2.5);
  }
`;
