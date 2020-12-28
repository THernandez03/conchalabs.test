import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import firebase from '@firebase/app';

import { signIn } from '../../actions';
import { createUser } from '../../apiRequests';

export const SignInButton = styled(({ className }) => {
  const dispatch = useDispatch();

  const handleSignInClick = async () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
    await createUser({ user });
    dispatch(signIn({ user }));
  };

  return (
    <button className={className} type="button" onClick={handleSignInClick}>
      SignIn
    </button>
  );
})``;
