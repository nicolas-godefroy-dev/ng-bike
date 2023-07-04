import './globals.css';
import { PrismicPreview } from '@prismicio/next';
import { Inter } from 'next/font/google';
import React from 'react';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { repositoryName } from '@/libs/prismic';

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" data-theme="forest">
    <body className={inter.className}>
      <Navbar />
      {children}
      <Footer />
      <PrismicPreview repositoryName={repositoryName} />
    </body>
  </html>
);

export default RootLayout;
