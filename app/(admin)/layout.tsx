import '@/styles/globals.css';
import clsx from 'clsx';
import React from 'react';

import { fontSans } from '@/config/fonts';
import Auth0Provider from './admin/providers';
import { Navbar } from '@/components/adminNavBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const footerText = '© 2024, Blake Thompson';
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Auth0Provider>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main>{children}</main>
            <footer className="w-full flex items-center justify-center py-3">
              <p>{footerText}</p>
            </footer>
          </div>
        </Auth0Provider>
      </body>
    </html>
  );
}
