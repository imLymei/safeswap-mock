'use client';

import { useContext } from 'react';
import { userContext } from './UserProvider';
import LoginPage from '../components/LoginPage';

export default function LoginProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useContext(userContext);

  if (user) return children;
  return <LoginPage />;
}
