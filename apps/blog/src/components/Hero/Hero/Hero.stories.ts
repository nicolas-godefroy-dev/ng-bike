import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'components/Hero/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: 'Always the bike you want',
    subtitle: 'Find a bike, hop in, and relax.',
    ctaText: 'See bikes',
    ctaHref: '#',
    align: 'center',
  },
};
