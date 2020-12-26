/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/react';

import { getStore } from '../src/configs/redux/store';
import { Home } from '../src/layouts';

const cssGlobal = css`
  html,
  body {
    margin: 0;
  }
`;

export const Index = () => (
  <React.StrictMode>
    {typeof window === 'undefined' ? null : (
      <Provider store={getStore()}>
        <Global styles={cssGlobal} />
        <Home />
      </Provider>
    )}
  </React.StrictMode>
);

export default Index;
