import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-menu';
import '../components/ac/dx-menu-item';
import '../components/ac/dx-button';
import { DxMenuPlacement, DxMenuSize } from '../types/dx-menu';

// Styling constants to avoid overly long inline style lines and satisfy max-len lint rule
const containerStyle = [
  'display: flex',
  'justify-content: center',
  'align-items: center',
  'min-height: 400px',
  'padding: 40px'
].join('; ') + ';';

/**
 * @typedef DxMenuProps
 * Props for the dx-menu web component.
 *
 * @property items - The menu items as an array of objects with text and value.
 * @property menuDelay - Delay in ms before opening the menu.
 * @property placement - Menu placement relative to anchor: 'bottom-start' or 'bottom-end'.
 * @property size - Menu size: 'sm' or 'md'.
 */
export interface DxMenuProps {
  items?: { text: string; value: string }[];
  menuDelay?: number;
  placement?: DxMenuPlacement;
  size?: DxMenuSize;
  dropdownMinWidth?: string;
}

const meta: Meta<DxMenuProps> = {
  title: 'Navigation/dx-menu',
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object', description: 'The menu items as an array of objects with text and value.', table: { defaultValue: { summary: '[]' } } },
    menuDelay: { control: 'number', description: 'Delay in ms before opening the menu.', table: { defaultValue: { summary: '300' } } },
    placement: { control: 'select', options: Object.values(DxMenuPlacement), description: 'Menu placement relative to anchor.', table: { defaultValue: { summary: DxMenuPlacement.BOTTOM_START } } },
    size: { control: 'select', options: Object.values(DxMenuSize), description: 'Menu size.', table: { defaultValue: { summary: DxMenuSize.MEDIUM } } },
    dropdownMinWidth: { control: 'text', description: 'CSS var --dropdown-menu-min-width (e.g., 240px).', table: { defaultValue: { summary: '' } } },
  },
  args: {
    items: [
      { text: 'Menu Item 1', value: '1' },
      { text: 'Menu Item 2', value: '2' },
      { text: 'Menu Item 3', value: '3' },
    ],
    menuDelay: 300,
    placement: DxMenuPlacement.BOTTOM_START,
    size: DxMenuSize.MEDIUM,
    dropdownMinWidth: '240px',
  },
  render: (args) => {
    return html`
      <div style="${containerStyle}">
        <dx-menu 
          style=${args.dropdownMinWidth ? `--dropdown-menu-min-width: ${args.dropdownMinWidth};` : ''}
          menuDelay=${args.menuDelay}
          placement=${args.placement}
          size=${args.size}
        >
          <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Menu"></dx-button>
          ${args.items && args.items.map((item) => { return html`
            <dx-menu-item slot="menu-items" text="${item.text}" value="${item.value}"></dx-menu-item>
          `; })}
        </dx-menu>
      </div>
    `;
  },  
};

export default meta;
type Story = StoryObj<DxMenuProps>;

export const Default: Story = {};

export const AllStates: Story = {
  args: {
    items: [
      { text: 'Option 1', value: '1' },
      { text: 'Option 2', value: '2' },
      { text: 'Option 3', value: '3' },
      { text: 'Option 4', value: '4' },
    ],
    menuDelay: 300,
    placement: DxMenuPlacement.BOTTOM_START,
    size: DxMenuSize.SMALL,
    dropdownMinWidth: '240px',
  },
};
