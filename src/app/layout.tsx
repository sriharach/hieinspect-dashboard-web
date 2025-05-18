import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import AuthGuestGuard from '@/contexts/AuthGuestGuard';
import TanstackProvider from '@/contexts/TanstackProvider';
import ToastProviders from '@/contexts/ToastProvider';
import Loading from '@/components/nextui/Loading/Loading';
import '@/styles/globals.scss';
import AuthProvider from '@/contexts/AuthProvider';

const kanitFont = Kanit({
  subsets: ['latin', 'thai'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'wisdom-construction dashboard',
  description: 'Dashboard wisdom-construction manager reviewer house service',
  applicationName: 'wisdom-construction of us',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanitFont.className}>
        <ToastProviders>
          <TanstackProvider>
            <Suspense fallback={<Loading />}>
              <AuthProvider>
                <AuthGuestGuard>{children}</AuthGuestGuard>
              </AuthProvider>
            </Suspense>
          </TanstackProvider>
        </ToastProviders>
      </body>
    </html>
  );
}
