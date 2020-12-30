import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '@firebase/app';

import { User } from '../../apiRequests';
import { SignIn } from '../SignIn';
import { Toolbar, SignOutButton, Path } from '../../components';

const UserListWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #2980b9;
  background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);
  background: linear-gradient(to right, #2c3e50, #2980b9);
  padding: 50px 0;
`;

const UserListItem = styled.div`
  font-size: 25px;
  margin: 5px 0;

  &:nth-child(odd) {
    color: #fdfdfd;
    text-shadow: 0 0 12px #000, 0 0 10px #03edf975, 0 0 15px #03edf975,
      0 0 25px #03edf975;
  }

  &:nth-child(even) {
    color: #fff5f6;
    text-shadow: 0 0 12px #000, 0 0 10px #fc1f2c75, 0 0 15px #fc1f2c75,
      0 0 25px #fc1f2c75;
  }
`;

export const Users = styled(({ className }) => {
  const [users, setUsers] = useState([]);
  const [loggedUser] = useAuthState(firebase.auth());

  useEffect(() => {
    const request = async () => {
      setUsers(await User.getAll());
    };
    request();
  }, []);

  if (!loggedUser) return <SignIn NextPageComponent={SignIn} />;

  return (
    <div className={className}>
      <Path />
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
`;
