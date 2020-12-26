import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { ToolbarSection } from '../ToolbarSection';
import { getSizeAndUnit } from '../../../utils';

export const Toolbar = styled(({ className, size, left, center, right }) => (
  <div className={className}>
    <ToolbarSection type="left" size={size}>
      {left}
    </ToolbarSection>
    <ToolbarSection type="center" size={size}>
      {center}
    </ToolbarSection>
    <ToolbarSection type="right" size={size}>
      {right}
    </ToolbarSection>
  </div>
))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: #282828;
  border-top: 1px solid #000;

  ${({ size, left, right }) => {
    const maxElements = Math.max(...[left.length, right.length]);
    const [value, unit] = getSizeAndUnit(size);

    return `
      > div:first-of-type,
      > div:last-of-type{
        min-width: ${maxElements * value * 2}${unit};
      }
    `;
  }}
`;

Toolbar.propTypes = {
  center: PropTypes.arrayOf(PropTypes.element),
  left: PropTypes.arrayOf(PropTypes.element),
  right: PropTypes.arrayOf(PropTypes.element),
};

Toolbar.defaultProps = {
  center: [],
  left: [],
  right: [],
};
