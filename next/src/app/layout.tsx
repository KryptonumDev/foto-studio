import type { Metadata } from 'next';
import '@/global/global.scss';

import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import { SmoothScrollingProvider } from '@/components/ui/SmoothScrolling';

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
      <body>
        <SmoothScrollingProvider>
          <Header />
          <main id='main'>{children}</main>
          <Footer />
        </SmoothScrollingProvider>
      </body>
    </html>
  );
}
