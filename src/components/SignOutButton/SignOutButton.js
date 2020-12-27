import { useDispatch } from 'react-redux';
import { GoSignOut } from 'react-icons/go';
import styled from '@emotion/styled';
import firebase from 'firebase/app';

import { ToolbarItem } from '../Toolbar';
import { signOut } from '../../actions';

export const SignOutButton = styled(({ className, size }) => {
  const dispatch = useDispatch();

  const handleSignOutClick = (event) => {
    dispatch(signOut());
    firebase.auth().signOut();
  };

  return (
    <ToolbarItem
      className={className}
      icon={<GoSignOut size={size} />}
      onClick={handleSignOutClick}
      size={size}
    />
  );
})`
  background: #dc3545;
  color: #ffffff;
`;
