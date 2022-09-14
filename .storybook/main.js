module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "storybook-addon-styled-component-theme/dist/register"
  ],
  webpackFinal: async (config, { configType }) => {
    // Update config so that framer motion works
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    });

    // Return the altered config
    return config;
  },
}