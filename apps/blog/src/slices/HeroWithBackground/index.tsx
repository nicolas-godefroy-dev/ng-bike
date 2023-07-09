import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import React from 'react';

import { HeroWithBackground } from '@/components/Hero/HeroWithBackground/HeroWithBackground';

/**
 * Props for `HeroWithBackground`.
 */
export type HeroWithBackgroundSliceProps = SliceComponentProps<Content.HeroWithBackgroundSlice>;

/**
 * Component for "HeroWithBackground" Slices.
 */
const HeroWithBackgroundSlice = ({ slice }: HeroWithBackgroundSliceProps): JSX.Element => (
  <HeroWithBackground {...slice.primary} />
);

export default HeroWithBackgroundSlice;
