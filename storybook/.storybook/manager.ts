import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'ClinicSoft - Web Design System',
    brandUrl: 'https://www.figma.com/design/m0G6wKSbVhgqWutfmt7vFU',
    colorPrimary: '#299B48',
    colorSecondary: '#299B48',
    fontBase: '"Poppins", sans-serif',
  }),
  sidebar: { showRoots: true },
});
