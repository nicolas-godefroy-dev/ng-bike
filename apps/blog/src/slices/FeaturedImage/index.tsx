import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import React from 'react';

import { FeaturedImage as FeaturedImageCmp } from '@/components/FeaturedImage/FeaturedImage';

/**
 * Props for `Image`.
 */
export type FeaturedImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const FeaturedImage = ({ slice }: FeaturedImageProps): JSX.Element => {
  return <FeaturedImageCmp {...slice.primary} />;
};

export default FeaturedImage;
