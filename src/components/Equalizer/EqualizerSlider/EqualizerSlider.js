import { useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const RangeInput = styled.input`
  transform: rotate(-90deg) scale(2.5);
`;

export const EqualizerSlider = styled(
  ({ className, type, filter, frequency }) => {
    const maxValue = frequency.maxValue || filter.frequency.maxValue;
    const minValue = frequency.minValue || filter.frequency.minValue;
    const centerValue = (maxValue + minValue) / 2;

    useEffect(() => {
      filter.type = type;
      filter.frequency.value = frequency.value || centerValue;
    }, [filter, type, frequency.value, centerValue]);

    useEffect(() => {
      if (type === 'bandpass') {
        filter.Q.value = centerValue / (maxValue - minValue);
      }
    }, [maxValue, minValue, centerValue, type, filter.Q]);

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
`;

EqualizerSlider.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.object,
  frecuency: PropTypes.shape({
    maxValue: PropTypes.number,
    minValue: PropTypes.number,
    value: PropTypes.number,
  }),
  type: PropTypes.oneOf(['lowpass', 'bandpass', 'highpass']),
};

EqualizerSlider.defaultProps = {};
