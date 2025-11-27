import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-popover';
import { DxPopoverArrowPosition } from '../types/dx-popover';

const meta: Meta = {
  title: 'Display/dx-popover',
  component: 'dx-popover',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', description: 'Whether the popover is open' },
    label: { control: 'text', description: 'Popover label' },
    text: { control: 'text', description: 'Popover text' },
    showLabel: { control: 'boolean', description: 'Show label section' },
    showText: { control: 'boolean', description: 'Show text section' },
    showCloseIcon: { control: 'boolean', description: 'Show close icon button' },
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
      description: 'Theme of popover',
    },
    arrow: {
      control: { type: 'radio' },
      options: [
        DxPopoverArrowPosition.TOP,
        DxPopoverArrowPosition.BOTTOM,
        DxPopoverArrowPosition.LEFT,
        DxPopoverArrowPosition.RIGHT,
      ],
      description: 'Arrow position',
    },
    withpadding: { control: 'boolean', description: 'Apply internal padding' },
  },
  args: {
    open: false,
    label: 'Label',
    text: 'Text',
    showLabel: false,
    showText: false,
    showCloseIcon: false,
    theme: 'light',
    arrow: undefined,
    withpadding: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Popover that displays floating content when hovering/clicking the target slot. Fully RTL supported.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<{
  open: boolean;
  label: string;
  text: string;
  showLabel: boolean;
  showText: boolean;
  showCloseIcon: boolean;
  theme: string;
  arrow: DxPopoverArrowPosition | undefined;
  withpadding: boolean;
}>;

export const DxPopoverStory: Story = {
  render: (args) => html`
    <dx-popover
      ?open=${args.open}
      .label=${args.label}
      .text=${args.text}
      ?showLabel=${args.showLabel}
      ?showText=${args.showText}
      ?showCloseIcon=${args.showCloseIcon}
      .theme=${args.theme}
      .arrow=${args.arrow}
      ?withpadding=${args.withpadding}
      style="position: absolute; margin-left: 10%;"
    >
      <button slot="target" style="position: relative;">
        Hover me
      </button>
    </dx-popover>
  `,
  name: 'Default',
};
