import styled from '@emotion/styled';

export const ToolbarItem = styled(({ className, icon }) => (
  <button className={className} type="button">
    {icon}
  </button>
))`
  border: 0;
  border-radius: 50px;
`;
