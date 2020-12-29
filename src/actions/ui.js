import {
  SIDEBAR_TOGGLE,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SELECT_ITEM,
  DESELECT_ITEM,
} from '../constants/actionTypes';

export const toggleSidebar = (payload) => ({ type: SIDEBAR_TOGGLE, payload });
export const showSidebar = (payload) => ({ type: SIDEBAR_OPEN, payload });
export const hideSidebar = (payload) => ({ type: SIDEBAR_CLOSE, payload });

export const selectItem = (payload) => ({ type: SELECT_ITEM, payload });
export const deselectItem = (payload) => ({ type: DESELECT_ITEM, payload });
