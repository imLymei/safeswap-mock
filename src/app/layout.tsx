import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './_components/Sidebar';
import { cn } from '@/lib/utils';

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
      <body className={cn(inter.className, 'bg-neutral-950 text-neutral-100')}>
        <div className='flex h-screen p-2 pl-0 selection:bg-blue-500'>
          <Sidebar />
          <main className='flex-1 rounded bg-neutral-100 text-neutral-950'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
