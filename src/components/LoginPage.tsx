'use client';

import ThemeSelector from '@/components/ThemeSelector';
import { userContext, USERS } from '@/providers/UserProvider';
import { useContext } from 'react';

export default function LoginPage() {
  const { setUser } = useContext(userContext);

  return (
    <div className='absolute inset-0 flex flex-1 flex-col items-center justify-center gap-2 bg-neutral-100 dark:bg-neutral-950'>
      <div className='flex min-h-[1/3] w-2/3 flex-col gap-4 rounded border border-neutral-950 p-6 text-neutral-950 dark:border-neutral-100 dark:text-neutral-100 sm:w-1/3'>
        <h1 className='text-center text-2xl font-bold'>Entrar como:</h1>
        <button
          onClick={() => setUser(USERS.ADMIN)}
          className='h-full w-full rounded border border-neutral-950 px-4 py-2 hover:bg-black/10 dark:border-neutral-100 dark:hover:bg-white/10'
        >
          Admin
        </button>
        <button
          onClick={() => setUser(USERS.PF)}
          className='h-full w-full rounded border border-neutral-950 px-4 py-2 hover:bg-black/10 dark:border-neutral-100 dark:hover:bg-white/10'
        >
          Usuário PF
        </button>
        <button
          onClick={() => setUser(USERS.PJ)}
          className='h-full w-full rounded border border-neutral-950 px-4 py-2 hover:bg-black/10 dark:border-neutral-100 dark:hover:bg-white/10'
        >
          Usuário PJ
        </button>
      </div>
      <ThemeSelector />
    </div>
  );
}
