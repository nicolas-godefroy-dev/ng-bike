import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import React from 'react';

import { FeaturedImage } from '@/components/FeaturedImage/FeaturedImage';

/**
 * Props for `Image`.
 */
export type FeaturedImageSliceProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const FeaturedImageSlice = ({ slice }: FeaturedImageSliceProps): JSX.Element => {
  return <FeaturedImage {...slice.primary} />;
};

export default FeaturedImageSlice;
