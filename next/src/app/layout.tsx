import type { Metadata } from 'next';
import '@/global/global.css';

import { OverusedGrotesk } from '@/global/fonts';

import Header from '@/components/global/Header';

export const metadata: Metadata = {
  title: 'Foto Studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${OverusedGrotesk.variable}`}>
        <Header />
        <main id='main'>{children}</main>
      </body>
    </html>
  );
}
