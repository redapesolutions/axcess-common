export default {
  input: 'src/index.js',
  output: [{
    file: 'build/index.umd.js',
    format: 'umd',
    name: 'axcessCommon',
  },
  {
    file: 'build/index.esm.js',
    format: 'es',
  }],
  sourcemap: true
}
