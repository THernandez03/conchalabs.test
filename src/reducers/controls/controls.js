import { TOGGLE_PLAY_PAUSE, PLAY, PAUSE } from '../../constants/actionTypes';
import { PLAYING, PAUSED } from '../../constants/controlStatus';

const initialState = {
  status: PAUSED,
};

export const controls = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PLAY_PAUSE: {
      return {
        ...state,
        status: state.status === PLAYING ? PAUSED : PLAYING,
      };
    }
    case PLAY: {
      return { ...state, status: PLAYING };
    }
    case PAUSE: {
      return { ...state, status: PAUSED };
    }
    default: {
      return state;
    }
  }
};
