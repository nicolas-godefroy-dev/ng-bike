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
    title: 'Always the bike you want',
    subtitle: 'Find a bike, hop in, and relax.',
    ctaText: 'See bikes',
    ctaHref: '#',
    align: 'center',
  },
};
