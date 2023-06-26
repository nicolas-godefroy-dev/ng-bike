import { PrismicImage, PrismicRichText } from '@prismicio/react'

import { createClient } from "@/libs/prismic";

export default async function Page({ params }: { params: { uid: string } }) {
  const client = createClient();
  const page = await client.getByUID("blog_post", params.uid);

  return (
    <main>
      <h1>{page.data.title}</h1>
      <PrismicImage field={page.data.image} />
      <PrismicRichText field={page.data.content} />
    </main>
  )
} 