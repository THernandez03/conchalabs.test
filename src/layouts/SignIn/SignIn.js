import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import firebase from '@firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Home } from '../Home';
import { signIn } from '../../actions';
import { SignInButton } from '../../components';

export const SignIn = styled(({ className, NextPageComponent }) => {
  const [Component, setComponent] = useState();
  const [loggedUser] = useAuthState(firebase.auth());
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!loggedUser) return;
    setComponent(NextPageComponent || Home);
  }, [loggedUser, NextPageComponent, user]);

  useEffect(() => {
    if (!user.uid && loggedUser) dispatch(signIn({ user: loggedUser }));
  }, [user.uid, loggedUser, dispatch]);

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
  background: #2980b9;
  background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);
  background: linear-gradient(to right, #2c3e50, #2980b9);
`;
