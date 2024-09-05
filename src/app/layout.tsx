import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import MobileSidebar from './_components/sidebar/mobile/MobileSidebar';
import { ThemeProvider } from 'next-themes';
import Sidebar from './_components/sidebar/Sidebar';
import LayoutMain from './_components/LayoutMain';

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
        <ThemeProvider>
          <div className='flex max-h-svh flex-1 p-2 selection:bg-blue-500 max-sm:flex-col max-sm:pb-0 sm:pl-0'>
            <Sidebar />
            <LayoutMain>{children}</LayoutMain>
            <MobileSidebar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
