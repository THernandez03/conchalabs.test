import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import firebase from '@firebase/app';
import '@firebase/auth';

import { config } from '../src/configs/firebase/setup';
import { getStore } from '../src/configs/redux/store';
import { SignIn, Home } from '../src/layouts';

const cssGlobal = css`
  html,
  body {
    margin: 0;
  }
`;

const queryClient = new QueryClient();

export const Index = () => {
  const [initialized, setInitialized] = useState();

  useEffect(() => {
    firebase.initializeApp(config);
    setInitialized(true);
  }, []);

  if (!initialized) return null;

  return (
    <React.StrictMode>
      <Provider store={getStore()}>
        <QueryClientProvider client={queryClient}>
          <Global styles={cssGlobal} />
          <SignIn NextPageComponent={Home} />
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default Index;
