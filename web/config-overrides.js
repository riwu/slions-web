const { injectBabelPlugin } = require('react-app-rewired');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#6c6ed7' },
    javascriptEnabled: true,
  })(config, env);

  config =
    env === 'production'
      ? injectBabelPlugin(['transform-remove-console'], config)
      : rewireReactHotLoader(config, env);
  return config;
};
