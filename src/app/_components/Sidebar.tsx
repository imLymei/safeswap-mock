'use client';

import { cn } from '@/lib/utils';
import { ICON_SIZE, NAVBAR_SECTIONS } from '@/lib/constants';
import { useState } from 'react';
import { IoIosExit, IoIosLock } from 'react-icons/io';
import SideBarSection from './SideBarSection';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav
      className={cn('flex flex-col items-center gap-6 px-4 max-sm:hidden', {
        'w-64': isOpen,
        'w-16': !isOpen,
      })}
    >
      <div className='flex items-center gap-2'>
        <IoIosLock size={ICON_SIZE.SMALL} className='text-blue-500' />
        <p className='font-bold'>SafeSwap</p>
      </div>
      <div className='flex w-full gap-2'>
        <div className='size-12 rounded-full bg-gradient-to-br from-neutral-400 to-neutral-600'></div>
        <div>
          <p className='line-clamp-1 font-bold'>Nome de Usuário</p>
          <p className='line-clamp-1 text-xs'>usuario@gmail.com</p>
        </div>
      </div>
      <div className='w-full flex-1 space-y-6 overflow-auto'>
        {NAVBAR_SECTIONS.map((section, sectionIndex) => (
          <SideBarSection
            key={`section-${section.name}-${sectionIndex}`}
            name={section.name}
            navbarItems={section.navbarItems}
          />
        ))}
      </div>
      <button className='flex w-full items-center justify-center gap-2 rounded p-2 text-red-500 hover:bg-red-500/20'>
        <IoIosExit size={ICON_SIZE.SMALL} />
        <p>Sair</p>
      </button>
    </nav>
  );
}
