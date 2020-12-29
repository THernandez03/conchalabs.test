import { combineReducers } from 'redux';

import { PLAYING, PAUSED, NOT_STARTED } from '../constants/controlStatus';
import { OPENED, CLOSED } from '../constants/sidebarStatus';
import {
  TOGGLE_MUSIC,
  PLAY_MUSIC,
  PAUSE_MUSIC,
  SIGN_IN,
  SIGN_OUT,
  SIDEBAR_TOGGLE,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SELECT_ITEM,
  DESELECT_ITEM,
} from '../constants/actionTypes';

export const musicStatus = (state = NOT_STARTED, action) => {
  switch (action.type) {
    case TOGGLE_MUSIC: {
      return state === PLAYING ? PAUSED : PLAYING;
    }
    case SELECT_ITEM:
    case PLAY_MUSIC: {
      return PLAYING;
    }
    case DESELECT_ITEM:
    case PAUSE_MUSIC: {
      return PAUSED;
    }
    case SIGN_OUT: {
      return NOT_STARTED;
    }
    default: {
      return state;
    }
  }
};

export const selectedItem = (state = 'Nature.wav', action) => {
  switch (action.type) {
    case SELECT_ITEM: {
      return action.payload.item;
    }
    case DESELECT_ITEM: {
      return '';
    }
    default: {
      return state;
    }
  }
};

export const sidebarStatus = (state = CLOSED, action) => {
  switch (action.type) {
    case SIDEBAR_TOGGLE: {
      return state === OPENED ? CLOSED : OPENED;
    }
    case SIDEBAR_OPEN: {
      return OPENED;
    }
    case SIDEBAR_CLOSE: {
      return CLOSED;
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
  selectedItem,
  sidebarStatus,
  user,
});
