import {
  TOGGLE_MUSIC,
  PLAY_MUSIC,
  PAUSE_MUSIC,
} from '../constants/actionTypes';

export const toggle = () => ({ type: TOGGLE_MUSIC });
export const play = () => ({ type: PLAY_MUSIC });
export const pause = () => ({ type: PAUSE_MUSIC });
