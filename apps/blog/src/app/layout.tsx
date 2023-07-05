import './globals.css';
import { PrismicPreview } from '@prismicio/next';
import { Inter } from 'next/font/google';
import React from 'react';

import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/NavBar/Navbar';
import { getSitemap, repositoryName } from '@/libs/prismic';

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ng-bike',
  description: 'bike sharing app made with expo',
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  const sitemap = await getSitemap();
  const links = [...sitemap.landingPages, ...sitemap.blogPosts];

  return (
    <html lang="en" data-theme="forest">
      <body className={inter.className}>
        <Navbar links={links} />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
};

export default RootLayout;
