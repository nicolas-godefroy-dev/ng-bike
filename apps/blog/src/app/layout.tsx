import './globals.css';
import { PrismicPreview } from '@prismicio/next';
import { Inter } from 'next/font/google';
import React from 'react';

import { Footer } from '@/components/Footer/Footer';
import { Navigation } from '@/components/Navigation/Navigation';
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
  const { landingPages, blogPosts } = await getSitemap();
  const sections = [
    {
      title: 'Pages',
      links: landingPages,
    },
    {
      title: 'Blog',
      links: blogPosts,
    },
  ];

  return (
    <html lang="en" data-theme="forest">
      <body className={inter.className}>
        <Navigation sections={sections}>
          {children}
          <Footer />
          <PrismicPreview repositoryName={repositoryName} />
        </Navigation>
      </body>
    </html>
  );
};

export default RootLayout;
