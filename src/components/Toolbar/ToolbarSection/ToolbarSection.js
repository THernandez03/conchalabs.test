import { Children, cloneElement } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { ToolbarItem } from '../ToolbarItem';

export const ToolbarSection = styled(({ children, className, size }) => (
  <div className={className}>
    {Children.map(children, (child) => cloneElement(child, { size }))}
  </div>
))`
  display: flex;

  ${({ type }) => {
    if (type === 'center') {
      return `
        > ${ToolbarItem} {
          margin: 1.5px;
        }
      `;
    }
  }}
`;

ToolbarSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
};

ToolbarSection.defaultProps = {};
