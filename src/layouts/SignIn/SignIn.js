import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';

import { signIn } from '../../actions';
import { Home } from '../Home';

export const SignIn = styled(({ className, NextPageComponent }) => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const dispatch = useDispatch();

  if (loading) return null;

  if (user && !loading && !error) {
    dispatch(signIn({ user }));
    return NextPageComponent ? <NextPageComponent /> : <Home />;
  }

  const handleSignInClick = async (event) => {
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