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
    title: 'Box Office News!',
    subtitle:
      'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
    ctaText: 'Get Started',
    ctaHref: '#',
    align: 'center',
  },
};
