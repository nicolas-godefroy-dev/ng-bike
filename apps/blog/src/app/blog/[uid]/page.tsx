import { SliceZone } from '@prismicio/react'

import { createClient } from "@/libs/prismic";
import { components as slices } from "@/slices";

type BlogPostPageProps = { params: { uid: string } }

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const client = createClient();
  const page = await client.getByUID("blog_post", params.uid);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <SliceZone slices={page.data.slices} components={slices} />
    </main>
  )
}


export default BlogPostPage