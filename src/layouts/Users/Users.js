import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '@firebase/app';

import { getAllUsers } from '../../apiRequests';
import { SignIn } from '../SignIn';
import { Toolbar, SignOutButton } from '../../components';

const UserListWrapper = styled.div``;
const UserListItem = styled.div``;

export const Users = styled(({ className }) => {
  const [users, setUsers] = useState([]);
  const [loggedUser] = useAuthState(firebase.auth());

  useEffect(() => {
    const request = async () => {
      setUsers(await getAllUsers());
    };
    request();
  }, []);

  if (!loggedUser) return <SignIn NextPageComponent={SignIn} />;

  return (
    <div className={className}>
      <UserListWrapper>
        {users.map((user) => (
          <UserListItem key={user.ID}>
            {user.name} - {user.email}
          </UserListItem>
        ))}
      </UserListWrapper>
      <Toolbar size="1.5rem" right={[<SignOutButton key="signout" />]} />
    </div>
  );
})`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > ${UserListWrapper} {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > ${UserListItem} {
      font: 'Roboto';
    }
  }
`;
