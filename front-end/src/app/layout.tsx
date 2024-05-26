import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import MuiProvider from '@/contexts/theme-provider';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] });

export const metadata: Metadata = {
  title: 'WeTube',
  description: 'Generated by David and Syaoran',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}
