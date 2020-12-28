import { StrictMode, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/react';
import firebase from '@firebase/app';
import '@firebase/auth';

import { config } from '../src/configs/firebase/setup';
import { getStore } from '../src/configs/redux/store';
import { SignIn, Home } from '../src/layouts';

const cssGlobal = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  html,
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Index = () => {
  const [initialized, setInitialized] = useState();

  useEffect(() => {
    if (firebase.apps.length) {
      firebase.app();
    } else {
      firebase.initializeApp(config);
    }
    setInitialized(true);
  }, []);

  if (!initialized) return null;

  return (
    <StrictMode>
      <Provider store={getStore()}>
        <Global styles={cssGlobal} />
        <SignIn NextPageComponent={Home} />
      </Provider>
    </StrictMode>
  );
};

export default Index;
