import styled from '@emotion/styled';

export const ToolbarItem = styled(({ className, icon, onClick }) => (
  <button className={className} type="button" onClick={onClick}>
    {icon}
  </button>
))`
  border: 0;
  border-radius: 50px;
`;
