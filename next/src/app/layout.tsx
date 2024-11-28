import '@/global/global.scss';
import { OverusedGrotesk } from '@/global/fonts';
import { LOCALE } from '@/global/constants';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import SchemaOrganization from '@/global/Schema/Organization';
import { SmoothScrollProvider } from '@/components/ui/SmoothScroll';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={LOCALE}>
      <body className={OverusedGrotesk.className}>
        <Header />
        <SmoothScrollProvider>
          <main id='main'>{children}</main>
        </SmoothScrollProvider>
        <Footer />
        <SchemaOrganization />
      </body>
    </html>
  );
}
