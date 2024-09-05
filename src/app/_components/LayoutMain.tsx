'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

export default function LayoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, systemTheme } = useTheme();

  const userTheme = theme === 'system' ? systemTheme : theme;

  return (
    <main
      className={cn('flex-1 rounded', {
        'bg-neutral-100 text-neutral-950': userTheme === 'light',
        'bg-neutral-900 text-neutral-100': userTheme === 'dark',
      })}
    >
      {userTheme}
      {children}
    </main>
  );
}
