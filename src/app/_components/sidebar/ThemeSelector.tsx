'use client';

import { ICON_SIZE } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { IoIosSunny } from 'react-icons/io';
import { IoMoon } from 'react-icons/io5';
import { RiComputerFill } from 'react-icons/ri';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex gap-1 rounded bg-neutral-900 p-1'>
      <button
        className={cn('flex flex-1 items-center justify-center rounded p-2', {
          'bg-neutral-950': theme === 'system',
          'hover:bg-neutral-800': theme !== 'system',
        })}
        onClick={() => setTheme('system')}
      >
        <RiComputerFill size={ICON_SIZE.EXTRA_SMALL} />
      </button>
      <button
        className={cn('flex flex-1 items-center justify-center rounded p-2', {
          'bg-neutral-950': theme === 'dark',
          'hover:bg-neutral-800': theme !== 'dark',
        })}
        onClick={() => setTheme('dark')}
      >
        <IoMoon size={ICON_SIZE.EXTRA_SMALL} />
      </button>
      <button
        className={cn('flex flex-1 items-center justify-center rounded p-2', {
          'bg-neutral-950': theme === 'light',
          'hover:bg-neutral-800': theme !== 'light',
        })}
        onClick={() => setTheme('light')}
      >
        <IoIosSunny size={ICON_SIZE.EXTRA_SMALL} />
      </button>
    </div>
  );
}
