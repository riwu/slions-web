const { injectBabelPlugin } = require('react-app-rewired');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#6c6ed7',
      '@menu-dark-bg': '#6c6ed7',
      '@table-header-bg': '#ebebfe',
      '@table-header-sort-bg': '#d3d3fd',
    },
    javascriptEnabled: true,
  })(config, env);

  config =
    env === 'development'
      ? rewireReactHotLoader(config, env)
      : injectBabelPlugin(['transform-remove-console'], config);
  return config;
};
