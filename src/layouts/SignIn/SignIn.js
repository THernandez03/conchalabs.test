import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import firebase from '@firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Home } from '../Home';
import { SignInButton } from '../../components';

export const SignIn = styled(({ className, NextPageComponent }) => {
  const [Component, setComponent] = useState();
  const [loggedUser] = useAuthState(firebase.auth());

  useEffect(() => {
    if (!loggedUser) return;
    setComponent(NextPageComponent || Home);
  }, [loggedUser, NextPageComponent]);

  if (loggedUser && Component) return <Component />;

  return (
    <div className={className}>
      <SignInButton />
    </div>
  );
})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
