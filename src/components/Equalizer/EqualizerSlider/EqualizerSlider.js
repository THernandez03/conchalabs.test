import { useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const RangeInput = styled.input`
  transform: rotate(-90deg) scale(2.5) translate(-70px, -16px);
  height: 10px;
  cursor: pointer;
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
      if (type === 'peaking') {
        filter.Q.value = centerValue / (maxValue - minValue);
      }
    }, [maxValue, minValue, centerValue, type, filter.Q]);

    const handleSliderChange = (event) => {
      filter.gain.value = event.target.value;
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
  height: 360px;
  background: #35363a;
  box-shadow: 10px 10px 5px 2px #00000033, 5px 6px 7px 0 #00000024,
    0 1px 5px 0 #0000001f;
`;

EqualizerSlider.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.object,
  frecuency: PropTypes.shape({
    maxValue: PropTypes.number,
    minValue: PropTypes.number,
    value: PropTypes.number,
  }),
  type: PropTypes.oneOf(['lowshelf', 'peaking', 'highshelf']),
};

EqualizerSlider.defaultProps = {};
