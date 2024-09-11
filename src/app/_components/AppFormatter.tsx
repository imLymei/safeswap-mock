'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

export default function AppFormatter({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={cn(
        'flex max-h-svh flex-1 p-2 selection:bg-blue-500 max-sm:flex-col max-sm:pb-0 sm:pl-0',
        { dark: resolvedTheme === 'dark' },
      )}
    >
      {children}
    </div>
  );
}
