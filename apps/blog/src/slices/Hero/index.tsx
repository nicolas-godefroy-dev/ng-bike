import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import React from 'react';

import { Hero } from '@/components/Hero/Hero/Hero';
/**
 * Props for `Hero`.
 */
export type HeroSliceProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const HeroSlice = ({ slice }: HeroSliceProps): JSX.Element => <Hero {...slice.primary} />;

export default HeroSlice;
