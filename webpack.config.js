const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const build_dir = 'build';

const common = {
  entry: {
    app: 'app'
  },
  output: {
    path: build_dir,
    filename: 'bundle.js'
  }
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {});
}

if (TARGET === 'build' || !TARGET) {
  module.exports = merge(common, {});
}
