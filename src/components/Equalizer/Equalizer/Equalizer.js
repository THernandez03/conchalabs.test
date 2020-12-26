import styled from '@emotion/styled';

import { useMediaSource } from '../../../hooks';

export const Equalizer = styled(({ className, children, source }) => {
  const mediaSource = useMediaSource(source);
  console.log(mediaSource);

  return <div className={className}>{children}</div>;
})`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;
