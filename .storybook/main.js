module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-create-react-app",
      options: {
        scriptsPackageName: "react-scripts",
      },
    },
    '@storybook/addon-controls'
  ],
  staticDirs: ['../public', '../static', { from: '../foo/assets', to: '/assets' }],
}
