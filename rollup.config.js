import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/calculator.js',
  format: 'umd',
  banner: '/* calculator by Stephen Crane */',
  moduleName: 'calculator',
  plugins: [json(), babel()],
  dest: 'dist/calculator.js' // equivalent to --output
};