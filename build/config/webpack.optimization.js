import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

export default {
  minimizer: [
    new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      terserOptions: {
        /* eslint-disable-next-line camelcase */
        keep_fnames: true
      }
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: false,
          annotation: true,
        }
      }
    })
  ]
};
