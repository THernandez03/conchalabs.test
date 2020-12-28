import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import firebase from '@firebase/app';
import PropTypes from 'prop-types';

import { signIn } from '../../actions';
import { User } from '../../apiRequests';

export const SignInButton = styled(({ className }) => {
  const dispatch = useDispatch();

  const handleSignInClick = async () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
    await User.create({ user });
    dispatch(signIn({ user }));
  };

  return (
    <button className={className} type="button" onClick={handleSignInClick}>
      SignIn
    </button>
  );
})`
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  min-width: 64px;
  width: 100%;
  max-width: 250px;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #0057ff;
  box-shadow: 0 3px 1px -2px #00000033, 0 2px 2px 0 #00000024,
    0 1px 5px 0 #0000001f;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 36px;
  outline: none;
  cursor: pointer;
`;

SignInButton.propTypes = {
  className: PropTypes.string,
};

SignInButton.defaultProps = {};
