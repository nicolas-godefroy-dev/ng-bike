import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { Hero as HeroCmp } from '@/components/Hero';
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => (
  <HeroCmp {...slice.primary} />
);


export default Hero;
