const path = require('path');
const svgLoader = require('vite-svg-loader');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
    'storybook-addon-pseudo-states',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      root: path.dirname(require.resolve('@storybook/builder-vite')),
      plugins: [...config.plugins, svgLoader()],
      resolve: {
        alias: {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, '../../../'),
        },
      },
    };
  },
};
