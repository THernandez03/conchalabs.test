import { Children, cloneElement } from 'react';
import styled from '@emotion/styled';

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
