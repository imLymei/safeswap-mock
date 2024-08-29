import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './_components/Sidebar';
import { cn } from '@/lib/utils';
import MobileSidebar from './_components/MobileSidebar';

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
    <html lang='pt-br'>
      <body
        className={cn(
          inter.className,
          'h-screen w-screen overflow-hidden bg-neutral-950 text-neutral-100',
        )}
      >
        <div className='flex h-screen p-2 selection:bg-blue-500 max-sm:flex-col max-sm:pb-0 sm:pl-0'>
          <Sidebar />
          <main className='flex-1 rounded bg-neutral-100 text-neutral-950'>
            {children}
          </main>
          <MobileSidebar />
        </div>
      </body>
    </html>
  );
}
