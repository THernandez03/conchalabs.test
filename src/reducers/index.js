import { combineReducers } from 'redux';

import { PLAYING, PAUSED } from '../constants/controlStatus';
import {
  TOGGLE_MUSIC,
  PLAY_MUSIC,
  PAUSE_MUSIC,
} from '../constants/actionTypes';

export const musicStatus = (state = PAUSED, action) => {
  switch (action.type) {
    case TOGGLE_MUSIC: {
      return state === PLAYING ? PAUSED : PLAYING;
    }
    case PLAY_MUSIC: {
      return PLAYING;
    }
    case PAUSE_MUSIC: {
      return PAUSED;
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  musicStatus,
});
