'use client';

import { createContext, useState } from 'react';

export enum UserType {
  Admin = 0,
  PF,
  PJ,
}

type User = {
  name: string;
  email: string;
  userType: UserType;
};

export const userContext = createContext<{
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}>({ setUser: () => {} });

export const USERS = {
  ADMIN: { name: 'Admin', email: 'admin@gmail.com', userType: UserType.Admin },
  PF: { name: 'Usuário PF', email: 'pfuser@gmail.com', userType: UserType.PF },
  PJ: { name: 'Usuário PJ', email: 'pjuser@gmail.com', userType: UserType.PJ },
};

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | undefined>();

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
