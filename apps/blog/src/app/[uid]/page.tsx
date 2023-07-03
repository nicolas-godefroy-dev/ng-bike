import { SliceZone } from '@prismicio/react'

import { createClient } from "@/libs/prismic";
import { components as slices } from "@/slices";

type PageProps = { params: { uid: string } }

const Page = async ({ params }: PageProps) => {
  const client = createClient();
  const page = await client.getByUID("page", params.uid);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <SliceZone slices={page.data.slices} components={slices} />
    </main>
  )
}


export default Page