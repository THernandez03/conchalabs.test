/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/react';
import { BsMusicNoteList } from 'react-icons/bs';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';

import { getStore } from '../src/configs/redux/store';
import {
  Audio,
  Equalizer,
  Toolbar,
  ToolbarItem,
  PlayPause,
} from '../src/components';

const cssGlobal = css`
  html,
  body {
    margin: 0;
  }
`;

const cssWrapper = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Index = () => (
  <Provider store={getStore()}>
    <Global styles={cssGlobal} />
    <div>
      <Audio />
    </div>
    <div css={cssWrapper}>
      <Equalizer />
      <Toolbar
        size="1.5rem"
        left={({ size }) => [
          <ToolbarItem key="music" icon={<BsMusicNoteList size={size} />} />,
        ]}
        center={({ size }) => [
          <ToolbarItem key="prev" icon={<BiSkipPrevious size={size} />} />,
          <PlayPause key="play" size={size} />,
          <ToolbarItem key="next" icon={<BiSkipNext size={size} />} />,
        ]}
      />
    </div>
    <div id="modal-wrapper" />
  </Provider>
);

export default Index;
