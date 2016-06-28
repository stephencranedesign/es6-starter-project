import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/onePage.js',
  format: 'umd',
  banner: '/* OnePage by Stephen Crane */',
  moduleName: 'onePage',
  plugins: [json(), babel()],
  dest: 'dist/onePage.js' // equivalent to --output
};