import { useSelector } from 'react-redux';

import { SignIn } from '../SignIn';

export const Users = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  if (!isAuthenticated) return <SignIn NextPageComponent={Users} />;

  return <span>Users</span>;
};
