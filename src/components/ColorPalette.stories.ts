import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorPalette } from './ColorPalette';

const meta = {
  title: 'Design System/Color Palette',
  component: ColorPalette,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example story - update these values with your extracted design tokens
export const Default: Story = {
  args: {
    accentColors: {
      100: '#D2FD9C',
      200: '#77912A',
      300: '#619111',

    },
    secondaryColors: {
      secondary: '#FF6B6B', // TODO: Replace with your secondary color from Figma
    },
    textColors: {
      heading: '#1F2937',   
      paragraph1: '#394508',
      paragraph2: '#5D5D5D',
      subhead: '#CBCBCB',
    },
    backgroundColors: {
      100: '#394508',   
      200: '#FFFFFF',    
      300: 'EDEDED'
    },
  },
};

// You can also create stories that only show specific color groups
// export const PrimaryColorsOnly: Story = {
//   args: {
//     primaryColors: {
//       primary: '#0066CC',
//     },
//   },
// };

// export const TextColorsOnly: Story = {
//   args: {
//     textColors: {
//       dark: '#1F2937',
//       light: '#6B7280',
//       muted: '#9CA3AF',
//     },
//   },
// };

