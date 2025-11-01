import type { Meta, StoryObj } from '@storybook/react-vite';
import { Hero } from './Hero';

const meta = {
  title: 'Design System/Hero',
  component: Hero,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    headline: 'Money transfers made simple',
    subhead: 'No personal credit checks or founder guarantee.'
  },
};
