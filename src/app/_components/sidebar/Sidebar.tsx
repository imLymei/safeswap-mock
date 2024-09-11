'use client';

import { ICON_SIZE, NAVBAR_SECTIONS } from '@/lib/constants';
import { useContext } from 'react';
import { IoIosExit, IoIosLock } from 'react-icons/io';
import SideBarSection from './SideBarSection';
import { userContext, UserType } from '@/providers/UserProvider';
import ThemeSelector from '../../../components/ThemeSelector';
import { IoShield } from 'react-icons/io5';

export default function Sidebar() {
  const { user, setUser } = useContext(userContext);

  return (
    <nav className='flex w-64 flex-col items-center gap-6 px-4 max-sm:hidden'>
      <div className='flex items-center gap-2'>
        <IoIosLock size={ICON_SIZE.SMALL} className='text-blue-500' />
        <p className='font-bold'>SafeSwap</p>
      </div>
      <div className='flex w-full gap-2'>
        <div className='size-12 rounded-full bg-gradient-to-br from-neutral-400 to-neutral-600'></div>
        <div>
          <div className='flex items-center gap-2'>
            <p className='line-clamp-1 font-bold'>{user?.name}</p>
            {user?.userType === UserType.Admin && (
              <IoShield
                size={ICON_SIZE.EXTRA_SMALL}
                className='text-blue-500'
                title='Admin'
              />
            )}
          </div>
          <p className='line-clamp-1 text-xs'>{user?.email}</p>
        </div>
      </div>
      <div className='w-full flex-1 space-y-6 overflow-auto'>
        {NAVBAR_SECTIONS.filter(
          (sections) =>
            sections.userType === undefined ||
            sections.userType === user?.userType,
        ).map((section, sectionIndex) => (
          <SideBarSection
            key={`section-${section.name}-${sectionIndex}`}
            name={section.name}
            navbarItems={section.navbarItems}
          />
        ))}
      </div>
      <div className='w-full space-y-2'>
        <ThemeSelector />
        <button
          className='flex w-full items-center justify-center gap-2 rounded p-2 text-red-500 hover:bg-red-500/20'
          onClick={() => setUser(undefined)}
        >
          <IoIosExit size={ICON_SIZE.SMALL} />
          <p>Sair</p>
        </button>
      </div>
    </nav>
  );
}
