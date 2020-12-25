import { createStore, compose } from 'redux';

import { rootReducer } from '../../reducers';

export const getStore = () => {
  const composer = globalThis.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, {}, composer());
};
