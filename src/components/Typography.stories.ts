import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// Show all typography styles
export const AllStyles: Story = {
  args: {
    showDisplay: true,
    showHeadings: true,
    showBody: true,
    showUI: true,
  },
};

// Display only
export const Display: Story = {
  args: {
    showDisplay: true,
    showHeadings: false,
    showBody: false,
    showUI: false,
  },
};

// Headings only
export const Headings: Story = {
  args: {
    showDisplay: false,
    showHeadings: true,
    showBody: false,
    showUI: false,
  },
};

// Body text only
export const BodyText: Story = {
  args: {
    showDisplay: false,
    showHeadings: false,
    showBody: true,
    showUI: false,
  },
};

// UI elements only
export const UIElements: Story = {
  args: {
    showDisplay: false,
    showHeadings: false,
    showBody: false,
    showUI: true,
  },
};

