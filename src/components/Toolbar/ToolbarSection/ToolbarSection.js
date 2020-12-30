import { Children, cloneElement } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export const ToolbarSection = styled(({ children, className, size }) => (
  <div className={className}>
    {Children.map(children, (child) => cloneElement(child, { size }))}
  </div>
))`
  display: flex;
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
