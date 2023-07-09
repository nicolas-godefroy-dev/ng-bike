import type { Meta, StoryObj } from '@storybook/react';

import { prismicImage } from '@/mocks/prismicImage';

import { HeroWithBackground } from './HeroWithBackground';

const meta: Meta<typeof HeroWithBackground> = {
  title: 'components/Hero/HeroWithBackground',
  component: HeroWithBackground,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HeroWithBackground>;

export const Default: Story = {
  args: {
    image: prismicImage,
    title: 'Box Office News!',
    subtitle:
      'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
    ctaText: 'Get Started',
    ctaHref: '#',
    align: 'center',
  },
};
