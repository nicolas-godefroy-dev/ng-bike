import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    imageSrc: 'https://source.unsplash.com/random/384x128',
    title: "Marty's Blog",
    subtitle: "A blog about Marty's life",
    ctaText: 'Read more',
    ctaHref: '#',
  },
};
