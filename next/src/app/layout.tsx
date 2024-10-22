import '@/global/global.scss';
import { LOCALE } from '@/global/constants';
import type { Metadata } from 'next';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import { SmoothScrollProvider } from '@/components/ui/SmoothScroll';

export const metadata: Metadata = {
  title: 'Foto Studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={LOCALE}>
      <body>
        <Header />
        <SmoothScrollProvider>
          <main id='main'>{children}</main>
        </SmoothScrollProvider>
        <Footer />
      </body>
    </html>
  );
}
