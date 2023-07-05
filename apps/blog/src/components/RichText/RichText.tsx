import { Nullable } from '@ng-bike/utils';
import { RichTextField } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import React from 'react';

import { htmlSerializer } from '@/libs/prismic';

type RichTextProps = {
  content: Nullable<RichTextField>;
};

export const RichText: React.FC<RichTextProps> = ({ content }) => (
  <div className="mt-12 mb-24 prose">
    <PrismicRichText field={content} components={htmlSerializer} />
  </div>
);
