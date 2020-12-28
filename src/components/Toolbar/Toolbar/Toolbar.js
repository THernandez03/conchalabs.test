import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { ToolbarSection } from '../ToolbarSection';

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

  > ${ToolbarSection} {
    flex: 1;
    justify-content: center;
  }

  > ${ToolbarSection}:first-of-type {
    justify-content: flex-start;
  }

  > ${ToolbarSection}:last-of-type {
    justify-content: flex-end;
  }
`;

Toolbar.propTypes = {
  center: PropTypes.arrayOf(PropTypes.element),
  left: PropTypes.arrayOf(PropTypes.element),
  right: PropTypes.arrayOf(PropTypes.element),
  size: PropTypes.string,
};

Toolbar.defaultProps = {
  center: [],
  left: [],
  right: [],
};
