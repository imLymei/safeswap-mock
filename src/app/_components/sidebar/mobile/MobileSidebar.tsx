'use client';

import { ICON_SIZE, NAVBAR_SECTIONS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useContext, useEffect, useRef, useState } from 'react';
import { FaMoneyBill, FaPlus } from 'react-icons/fa6';
import { IoIosExit, IoIosLock } from 'react-icons/io';
import MobileSidebarItem from './MobileSidebarItem';
import ThemeSelector from '../../../../components/ThemeSelector';
import { userContext } from '@/providers/UserProvider';

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(userContext);

  const drawerRef = useRef<HTMLDivElement>(null);
  const isFirstTouch = useRef(true);

  useEffect(() => {
    if (!isOpen) {
      isFirstTouch.current = true;
      return;
    }

    function handleTouch(event: MouseEvent) {
      if (!drawerRef.current?.contains(event.target as Node)) {
        if (isFirstTouch.current) isFirstTouch.current = false;
        else setIsOpen(false);
      }
    }

    window.addEventListener('click', handleTouch);

    return () => window.removeEventListener('click', handleTouch);
  }, [isOpen]);

  return (
    <nav className='grid grid-cols-3 gap-4 p-2 text-xs sm:hidden'>
      <Link href='/' className='flex flex-col items-center gap-1 p-2'>
        <FaMoneyBill size={ICON_SIZE.EXTRA_SMALL} />
        <p>Transações</p>
      </Link>
      <Link href='/' className='flex flex-col items-center gap-1 p-2'>
        <IoIosLock size={ICON_SIZE.EXTRA_SMALL} />
        <p>Home</p>
      </Link>
      <button
        onClick={() => setIsOpen(true)}
        className='flex flex-col items-center gap-1 p-2'
      >
        <FaPlus size={ICON_SIZE.EXTRA_SMALL} />
        <p>Mais</p>
      </button>
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 top-1/2 z-40 rounded bg-neutral-950 transition-transform',
          { 'translate-y-full': !isOpen, 'translate-y-0': isOpen },
        )}
        ref={drawerRef}
      >
        <div className='pointer-events-none absolute left-0 right-0 top-0 h-12 bg-gradient-to-b from-black' />
        <div className='h-full w-full space-y-12 overflow-auto p-6'>
          {NAVBAR_SECTIONS.filter(
            (sections) =>
              sections.userType === undefined ||
              sections.userType === user?.userType,
          ).map((section) => (
            <div key={`mobile-section-${section.name}`} className='space-y-6'>
              <p className='text-xl font-bold'>{section.name}</p>
              <div className='grid grid-cols-3 gap-2'>
                {section.navbarItems.map((item) =>
                  item.navbarItems ? (
                    item.navbarItems.map((folderItem) => (
                      <MobileSidebarItem
                        key={`mobile-section-${section.name}-folder-${item.name}-item-${folderItem.name}`}
                        name={folderItem.name}
                        href={folderItem.href}
                        icon={folderItem.icon}
                      />
                    ))
                  ) : (
                    <MobileSidebarItem
                      key={`mobile-section-${section.name}-item-${item.name}`}
                      name={item.name}
                      href={item.href}
                      icon={item.icon}
                    />
                  ),
                )}
              </div>
            </div>
          ))}
          <div className='w-full space-y-2'>
            <ThemeSelector />
            <button
              onClick={() => setUser(undefined)}
              className='flex w-full items-center justify-center gap-2 rounded bg-red-500/20 p-2 text-xl font-bold text-red-500 active:bg-red-500/50'
            >
              <IoIosExit size={ICON_SIZE.EXTRA_SMALL} />
              <p>Sair</p>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute inset-0 bg-black/50 backdrop-blur-[1px]' />
      )}
    </nav>
  );
}
