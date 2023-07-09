import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    sections: [
      { title: 'title1', links: [{ title: 'Link 1', href: '/link1' }] },
      { title: 'title2', links: [{ title: 'Link 2', href: '/link2' }] },
    ],
  },
};
