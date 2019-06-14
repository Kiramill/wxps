
import browserSync from 'browser-sync';
import webpack from 'webpack';

import config from '../webpack.config.prod';

webpack(config).run();

browserSync({
  port: 4000,
  ui: {
    port: 4001
  },
  server: {
    baseDir: 'dist',
  }
});
