import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    images: [
      'https://source.unsplash.com/random/384x128',
      'https://source.unsplash.com/random/384x128',
      'https://source.unsplash.com/random/384x128',
      'https://source.unsplash.com/random/384x128',
      'https://source.unsplash.com/random/384x128',
    ],
  },
};
