import type { Preview, Decorator } from '@storybook/react-vite';
import React from 'react';
import { themes } from 'storybook/theming';
import '../src/tokens/tokens.css';
import '../src/styles/text-styles.css';
import '../src/styles/effects.css';
import '../src/styles/components.css';

// Toolbars use the exact Figma mode names of each variable collection.
// ClinicSoft is Dark only: the Semantic collection has one mode, "Dark".
const withModes: Decorator = (Story, ctx) => {
  const { Semantic = 'Dark', Breakpoint = 'Desktop' } = ctx.globals as Record<string, string>;
  const attrs = { 'data-semantic': Semantic, 'data-typography': Breakpoint, 'data-spacing': Breakpoint };
  React.useEffect(() => {
    Object.entries(attrs).forEach(([k, v]) => document.documentElement.setAttribute(k, v));
  }, [Semantic, Breakpoint]);
  return (
    <div {...attrs} className="sb-canvas">
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withModes],
  globalTypes: {
    Semantic: {
      description: 'Figma collection "Semantic" mode (ClinicSoft has one: Dark)',
      toolbar: { title: 'Semantic', icon: 'mirror', items: ['Dark'], dynamicTitle: true },
    },
    Breakpoint: {
      description: 'Figma collections "Typography" and "Spacing" mode',
      toolbar: { title: 'Mode', icon: 'browser', items: ['Desktop', 'iPad', 'Mobile'], dynamicTitle: true },
    },
  },
  initialGlobals: { Semantic: 'Dark', Breakpoint: 'Desktop' },
  parameters: {
    layout: 'padded',
    controls: { expanded: true, sort: 'none' },
    backgrounds: { disable: true },
    docs: { theme: themes.dark },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Foundations', ['Colors', 'Typography', 'Sizing', 'Effects', 'Icons'],
          'Form Elements', ['Checkbox', 'Radio', 'Toggle', 'Input', ['Text', 'Password', 'Date', 'Phone'], 'Text Area', 'Search', 'Upload Field', 'OTP', ['Cell', 'Field'], 'Stepper', 'Select'],
          'Navigation', ['Button', 'Icon Button', 'Tabs', ['Item', 'Bar'], 'Pagination', 'Breadcrumb', 'Menu', 'Sidebar', 'Top Bar'],
          'Data Display', ['Badge', 'Avatar', 'Tooltip', 'Alert', 'Toast', 'Modal'],
          'Patterns',
        ],
      },
    },
    a11y: { test: 'todo' },
  },
  tags: ['autodocs'],
};
export default preview;
