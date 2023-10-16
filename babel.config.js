module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {
        unstable_disableES6Transforms: true
      }
    ]
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '*': './src/',
          '~': './src'
        },
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js']
      }
    ],
    ['@babel/plugin-transform-flow-strip-types', {loose: true}],
    ['@babel/plugin-transform-private-methods', {loose: true}],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    ['@babel/plugin-proposal-private-methods', {loose: true}]
  ]
};
