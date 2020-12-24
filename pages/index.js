/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { Global, css } from '@emotion/react';
import { BsMusicNoteList, BsPlayFill } from 'react-icons/bs';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';

import { Equalizer, Toolbar, ToolbarItem } from '../src/components';

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

const cssSetup = css``;

export default function Home() {
  return (
    <>
      <Global styles={cssGlobal} />
      <div css={cssSetup}>
        <audio src="try-it-now_nature_Eventually,_all_things_merge_into_one,_and_a_river_runs_through_it_burgh_gentle_stream_12.wav">
          <track default kind="captions" />
        </audio>
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
            <ToolbarItem key="play" icon={<BsPlayFill size={size} />} />,
            <ToolbarItem key="next" icon={<BiSkipNext size={size} />} />,
          ]}
        />
      </div>
      <div id="modal-wrapper" />
    </>
  );
}
