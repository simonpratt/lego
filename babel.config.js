module.exports = function (api) {
  api.cache(true);
  const presets = [
    '@babel/preset-typescript',
    // "@babel/preset-env",
    '@babel/preset-react',
  ];
  // const plugins = [
  //   "babel-plugin-styled-components",
  //   "@babel/plugin-proposal-class-properties",
  //   "@babel/plugin-transform-runtime"
  // ];

  return {
    presets,
    // plugins
  };
};
