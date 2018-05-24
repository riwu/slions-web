const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config,
  );
  if (env === 'production') {
    config = injectBabelPlugin(['transform-remove-console'], config);
  }
  return config;
};
