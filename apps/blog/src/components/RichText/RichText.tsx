import { Nullable } from '@ng-bike/utils';
import { RichTextField } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import React from 'react';

import { htmlSerializer } from '@/libs/prismic';

type RichTextProps = {
  content?: Nullable<RichTextField>;
};

export const RichText: React.FC<RichTextProps> = ({ content }) => (
  <div className="w-full max-w-screen-md px-5 mx-auto prose py-9">
    <PrismicRichText field={content} components={htmlSerializer} />
  </div>
);
