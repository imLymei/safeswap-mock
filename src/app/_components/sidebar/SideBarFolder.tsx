'use client';

import { ICON_SIZE, NavbarFolder } from '@/lib/constants';
import { useState } from 'react';
import SideBarItem from './SideBarItem';
import { IoIosArrowDown } from 'react-icons/io';
import { cn } from '@/lib/utils';

export default function SideBarFolder({
  name,
  icon: Icon,
  navbarItems,
}: NavbarFolder) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={cn(
          'flex w-full items-center gap-2 rounded p-2 hover:bg-blue-500',
          { 'rounded-br-none bg-neutral-800': isOpen },
        )}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        title={name}
      >
        <Icon size={ICON_SIZE.EXTRA_SMALL} />
        <p className='line-clamp-1 flex-1 text-left'>{name}</p>
        <IoIosArrowDown
          size={ICON_SIZE.EXTRA_SMALL}
          className={cn({ 'rotate-180': isOpen })}
        />
      </button>
      <div
        className={cn('ml-2 space-y-2 rounded-b bg-neutral-900', {
          'p-2': isOpen,
        })}
      >
        {isOpen &&
          navbarItems.map((item, itemIndex) => (
            <SideBarItem
              key={`sidebar-folder-${name}-item-${item.name}-${itemIndex}`}
              name={item.name}
              icon={item.icon}
              href={item.href}
            />
          ))}
      </div>
    </div>
  );
}
