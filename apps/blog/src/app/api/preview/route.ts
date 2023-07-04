import { redirectToPreviewURL } from '@prismicio/next';
import { draftMode } from 'next/headers';
import { NextRequest } from 'next/server';

import { createClient } from '@/libs/prismic';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const GET = async (request: NextRequest) => {
  const client = createClient();

  draftMode().enable();

  await redirectToPreviewURL({ client, request });
};
