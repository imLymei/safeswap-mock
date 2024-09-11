import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import MobileSidebar from './_components/sidebar/mobile/MobileSidebar';
import Sidebar from './_components/sidebar/Sidebar';
import UserProvider from '@/providers/UserProvider';
import LoginProvider from '@/providers/LoginProvider';
import { ThemeProvider } from 'next-themes';
import AppFormatter from './_components/AppFormatter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SafeSwap',
  description: 'Just a SafeSwap Mock',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          'flex flex-col overflow-hidden bg-neutral-950 text-neutral-100',
        )}
      >
        <UserProvider>
          <ThemeProvider attribute='class'>
            <LoginProvider>
              <AppFormatter>
                <Sidebar />
                <main className='flex-1 rounded bg-neutral-100 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-100'>
                  {children}
                </main>
                <MobileSidebar />
              </AppFormatter>
            </LoginProvider>
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
