const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: config => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [
        path.resolve(__dirname, '../pages/'),
        path.resolve(__dirname, '../components/'),
        path.resolve(__dirname, '../'),
      ],
    };

    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ];

    return config;
  },
};
