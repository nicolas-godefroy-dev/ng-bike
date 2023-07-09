import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import React from 'react';

import { RichText } from '@/components/RichText/RichText';

/**
 * Props for `RichText`.
 */
export type RichTextSliceProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichTextSlice = ({ slice }: RichTextSliceProps): JSX.Element => {
  return <RichText {...slice.primary} />;
};

export default RichTextSlice;
