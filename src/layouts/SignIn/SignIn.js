import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import firebase from '@firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';

import { createUser } from '../../apiRequests';
import { signIn } from '../../actions';
import { Home } from '../Home';

export const SignIn = styled(({ className, NextPageComponent }) => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const isSignedIn = useSelector((state) => state.user.uid);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) return;
    createUser({ user });
  }, [user]);

  if (user && !loading && !error) {
    if (!isSignedIn) dispatch(signIn({ user }));
    return NextPageComponent ? <NextPageComponent /> : <Home />;
  }

  const handleSignInClick = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  };

  return (
    <div className={className}>
      <button type="button" onClick={handleSignInClick}>
        SignIn
      </button>
    </div>
  );
})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
