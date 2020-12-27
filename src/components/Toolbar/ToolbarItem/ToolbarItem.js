import { Children, cloneElement } from 'react';
import styled from '@emotion/styled';

import { getSizeAndUnit } from '../../../utils';

export const ToolbarItem = styled(({ className, icon, onClick, size }) => (
  <button className={className} type="button" onClick={onClick}>
    {Children.map(icon, (child) => cloneElement(child, { size }))}
  </button>
))`
  border: 0;
  border-radius: 50px;

  > svg {
    margin-top: 0.1rem;
    margin-left: 0.1rem;
  }

  ${({ size = '1.5rem' }) => {
    const [value, unit] = getSizeAndUnit(size);

    return `
      width: ${value * 2}${unit};
      height: ${value * 2}${unit};
    `;
  }}
`;
