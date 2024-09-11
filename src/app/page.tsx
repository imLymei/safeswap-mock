'use client';

import { userContext } from '@/providers/UserProvider';
import { useContext } from 'react';

export default function Home() {
  const { user } = useContext(userContext);

  return (
    <div className='p-6'>
      <h1 className='text-center text-4xl font-bold'>
        Bem Vindo {user?.name}!
      </h1>
    </div>
  );
}
