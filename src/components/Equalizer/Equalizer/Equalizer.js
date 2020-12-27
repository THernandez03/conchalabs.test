import { Children, cloneElement, useEffect, useState, useReducer } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';

const ADD_AUDIO_DEPS = 'ADD_AUDIO_DEPS';
const ADD_SLIDERS = 'ADD_SLIDERS';

export const equalizerReducer = (state, action) => {
  switch (action.type) {
    case ADD_AUDIO_DEPS: {
      const { context, source } = action.payload;
      return { ...state, context, source };
    }
    case ADD_SLIDERS: {
      const { audioContext, mediaSource } = action.payload;
      return { ...state, sliders };
    }
    default: throw new Error('triggered action was not defined in the reducer')
  }
}

export const Equalizer = styled(({ className, children, audioElement }) => {
  const [state, dispatch] = useReducer(equalizerReducer)
  const { sliders, context, source } = state;

  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    const mediaSource = audioContext.createMediaElementSource(audioElement.current);

    dispatch({ type: ADD_AUDIO_DEPS, payload: { audioContext, mediaSource } });
  }, [audioElement]);

  useEffect(() => {
    if (!context || !source) return;

    const cloned = Children.map(children, (child) =>
      cloneElement(child, {
        biquadFilter: context.createBiquadFilter(),
      }),
    );

    source.disconnect();
    const filter = cloned.reduce(
      (acc, child) => source.connect(child.props.biquadFilter),
      source,
    );
    filter.connect(context.destination);

    dispatch({ type: ADD_SLIDERS, payload: { audioContext, mediaSource } });
  }, [context, source]);

  return <div className={className}>{sliders}</div>;
})`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;
