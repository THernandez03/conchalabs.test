import styled from '@emotion/styled';

import { ToolbarItem } from '../ToolbarItem';
import { getSizeAndUnit } from '../../../utils';

export const ToolbarSection = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  display: flex;

  ${({ size }) => {
    const [value, unit] = getSizeAndUnit(size);

    return `
      > ${ToolbarItem} {
        width: ${value * 2}${unit};
        height: ${value * 2}${unit};
      }
    `;
  }}

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
