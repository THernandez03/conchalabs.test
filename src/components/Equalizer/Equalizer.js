import { css } from '@emotion/react';
import styled from '@emotion/styled';

const cssWrapper = css`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const EqualizerInput = styled(({ className }) => (
  <input
    className={className}
    type="range"
    orient="vertical"
    min="-40"
    max="40"
  />
))`
  transform: rotate(-90deg);
`;

export const Equalizer = () => (
  <div css={cssWrapper}>
    <EqualizerInput />
    <EqualizerInput />
    <EqualizerInput />
  </div>
);
