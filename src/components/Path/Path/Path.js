import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled';

export const Path = styled(({ className }) => {
  const router = useRouter();

  const homePath = '/';
  const usersPath = '/users';
  const destination = router.pathname === homePath ? usersPath : homePath;

  return (
    <Link href={destination} passHref>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a className={className}>Go to {destination}</a>
    </Link>
  );
})`
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px 5px 0 0;
  padding: 15px 25px;
  text-decoration: none;
  color: #282828;
  background: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 252, 200, 1) 0%,
    rgba(255, 247, 94, 1) 90%
  );

  border-radius: 5px;
  box-shadow: 0 3px 1px -2px #00000033, 0 2px 2px 0 #00000024,
    0 1px 5px 0 #0000001f;
`;
