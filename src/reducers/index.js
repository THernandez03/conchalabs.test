import { combineReducers } from 'redux';

import { PLAYING, PAUSED } from '../constants/controlStatus';
import {
  TOGGLE_MUSIC,
  PLAY_MUSIC,
  PAUSE_MUSIC,
  SIGN_IN,
  SIGN_OUT,
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

export const user = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN: {
      const { uid, email, displayName } = action.payload.user;
      return { uid, email, displayName };
    }
    case SIGN_OUT: {
      return {};
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  musicStatus,
  user,
});
