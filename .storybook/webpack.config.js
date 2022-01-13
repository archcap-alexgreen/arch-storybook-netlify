const path = require('path');
const common = require('../build/config/webpack.common.js');

module.exports = async ({config}) => {
  return {
    ...config,
    plugins: config.plugins.concat(common.plugins),
    module: {
        ...config.module,
        rules: config.module.rules.concat(common.rules)
    },
    optimization: {
        ...config.optimization,
        ...common.optimization
    },
    resolve: {
      modules: config.resolve.modules.concat(
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../tokens')
      )
    }
};
};
