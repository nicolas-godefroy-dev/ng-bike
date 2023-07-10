import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import React from 'react';

import { Hero } from '@/components/Hero/Hero/Hero';
import { HeroWithBackground } from '@/components/Hero/HeroWithBackground/HeroWithBackground';
import { HeroWithImage } from '@/components/Hero/HeroWithImage/HeroWithImage';
/**
 * Props for `Hero`.
 */
export type HeroSliceProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const HeroSlice = ({ slice }: HeroSliceProps): JSX.Element => {
  if (slice.variation === 'heroWithImage') return <HeroWithImage {...slice.primary} />;
  if (slice.variation === 'heroWithBackground') return <HeroWithBackground {...slice.primary} />;

  return <Hero {...slice.primary} />;
};

export default HeroSlice;
