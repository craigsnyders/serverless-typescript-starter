const path = require('path');

const root = (dir) => {
  return path.resolve(__dirname, dir);
};

module.exports = (options) => {
  return {
    entry: {
      'main': './src/handler.ts'
    },
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [root('node_modules'), root('src')]
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                useCache: false
              }
            }
          ],
          exclude: [/\.(spec|e2e)\.ts$/]
        }
      ]
    },
    output: {
      path: root('dist'),
      filename: 'handler.js',
      libraryTarget: 'commonjs'
    }
  };
};
