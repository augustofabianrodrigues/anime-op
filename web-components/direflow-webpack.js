const { webpackConfig } = require('direflow-scripts');
const DIREFLOW_FILE_RULES_INDEX = 2;

/**
 * Webpack configuration for Direflow Component
 * Additional webpack plugins / overrides can be provided here
 */
module.exports = (config, env) => {
  const output =
    env === 'production'
      ? {
          ...config.output,
          libraryTarget: 'amd',
        }
      : config.output;

  config.module.rules[DIREFLOW_FILE_RULES_INDEX].oneOf.unshift({
    test: /\.less$/,
    use: [
      {
        loader: 'to-string-loader',
      },
      {
        loader: 'css-loader',
        options: {
          esModule: false,
          sourceMap: false,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: false,
        },
      },
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            strictMath: true,
          },
          sourceMap: false,
        },
      },
    ],
  });

  return webpackConfig(
    {
      ...config,
      output,
    },
    env
  );
};
