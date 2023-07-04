import { SliceZone } from '@prismicio/react';
import React from 'react';

import { createClient } from '@/libs/prismic';
import { components as slices } from '@/slices';

const Home = async () => {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <SliceZone slices={page.data.slices} components={slices} />
    </main>
  );
};

export default Home;
