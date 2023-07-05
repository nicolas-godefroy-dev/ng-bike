import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    links: [
      {
        href: '#',
        title: 'Page 1',
      },
      {
        href: '#',
        title: 'Page 2',
      },
      {
        href: '#',
        title: 'Page 3',
      },
    ],
  },
};
