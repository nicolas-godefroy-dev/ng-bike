import type { Meta, StoryObj } from '@storybook/react';

import { prismicImage } from '@/mocks/prismicImage';

import { FeaturedImage } from './FeaturedImage';

const meta: Meta<typeof FeaturedImage> = {
  title: 'components/FeaturedImage',
  component: FeaturedImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FeaturedImage>;

export const Default: Story = {
  args: {
    image: prismicImage,
  },
};
