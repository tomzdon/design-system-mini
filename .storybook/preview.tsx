import type { Preview } from '@storybook/react';
// @ts-ignore
import '/src/index.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#202328' },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.backgrounds?.value === '#202328';
      return (
        <div className={isDark ? 'dark' : ''}>
          <div className="bg-white text-neutral-darkest dark:bg-[#202328] dark:text-white p-4">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;
