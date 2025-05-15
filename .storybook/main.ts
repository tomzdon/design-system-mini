import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
  ],
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    config.server = {
      ...config.server,
      host: "0.0.0.0",
      allowedHosts: [
        ".replit.dev",
        "design-system-mini-tomekkwlodarczy.replit.app",
      ],
    };
    return config;
  },
};

export default config;
