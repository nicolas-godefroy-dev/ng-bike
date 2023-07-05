import type { Meta, StoryObj } from '@storybook/react';

import { prismicRichText } from '@/mocks/prismicRichText';

import { RichText } from './RichText';

const meta: Meta<typeof RichText> = {
  title: 'components/RichText',
  component: RichText,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof RichText>;

export const Default: Story = {
  args: {
    content: prismicRichText,
  },
};
