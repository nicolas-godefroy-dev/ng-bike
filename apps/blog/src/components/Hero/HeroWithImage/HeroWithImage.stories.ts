import type { Meta, StoryObj } from '@storybook/react';

import { prismicImage } from '@/mocks/prismicImage';

import { HeroWithImage } from './HeroWithImage';

const meta: Meta<typeof HeroWithImage> = {
  title: 'components/Hero/HeroWithImage',
  component: HeroWithImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HeroWithImage>;

export const Default: Story = {
  args: {
    image: prismicImage,
    title: 'Always the bike you want',
    subtitle: 'Find a bike, hop in, and relax.',
    ctaText: 'See bikes',
    ctaHref: '#',
  },
};
