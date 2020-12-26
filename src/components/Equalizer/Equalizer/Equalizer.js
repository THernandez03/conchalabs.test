import { Children, cloneElement, useEffect, useState, useReducer } from 'react';
import styled from '@emotion/styled';

import { useAudioContext, useMediaSource } from '../../../hooks';

const AUDIO_DEPS_DONE = 'AUDIO_DEPS_DONE';
const CHILDREN_DONE = 'CHILDREN_DONE';

const Reducer = (state, action) => {
  switch (action.type) {
    case AUDIO_DEPS_DONE: {
      return { ...state, ...action.payload };
    }
    case CHILDREN_DONE: {
      return { ...state, ...action.payload };
    }
    default: {
      throw new Error('action.type was not defined');
    }
  }
};

export const Equalizer = styled(({ className, children, source }) => {
  const [state, dispatch] = useReducer(Reducer, { clonedChildren: [] });
  const { audioContext, mediaSource, clonedChildren } = state;

  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    // const mediaElementSource = context.createMediaElementSource(source.current);

    window.ctx = context;

    dispatch({
      type: AUDIO_DEPS_DONE,
      payload: { audioContext: context },
    });
  }, [source]);

  // useEffect(() => {
  //   if (!audioContext) return;

  //   const cloned = Children.map(children, (child) =>
  //     cloneElement(child, {
  //       biquadFilter: audioContext?.createBiquadFilter(),
  //     }),
  //   );

  //   dispatch({ type: CHILDREN_DONE, payload: { clonedChildren: cloned } });
  // }, [audioContext, children]);

  // useEffect(() => {
  //   if (!mediaSource || !clonedChildren.length || !audioContext) return;

  //   mediaSource.disconnect();
  //   const filter = clonedChildren.reduce(
  //     (acc, child) => mediaSource.connect(child.props.biquadFilter),
  //     mediaSource,
  //   );
  //   filter.connect(audioContext.destination);
  // }, [clonedChildren, audioContext, mediaSource]);

  return <div className={className}>{clonedChildren}</div>;
})`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;
