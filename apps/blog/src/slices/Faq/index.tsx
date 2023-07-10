import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import React from 'react';

import { Faq } from '@/components/Faq/Faq';

/**
 * Props for `FaqSlice`.
 */
export type FaqSliceProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "FaqSlice" Slices.
 */
const FaqSlice = ({ slice }: FaqSliceProps): JSX.Element => {
  const { title } = slice.primary;

  return <Faq title={title} faqs={slice.items} />;
};

export default FaqSlice;
