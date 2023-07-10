import type { Meta, StoryObj } from '@storybook/react';

import { Faq } from './Faq';

const meta: Meta<typeof Faq> = {
  title: 'components/Faq',
  component: Faq,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Faq>;

export const Default: Story = {
  args: {
    title: 'Frequently asked questions',
    faqs: [
      {
        question: 'How do I create an account?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      },
      {
        question: 'Is it available in my city?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      },
      {
        question: 'Can i use it without a smartphone?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      },
    ],
  },
};
