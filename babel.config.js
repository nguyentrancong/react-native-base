module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@assets': './src/assets',
          '@components': './src/components',
          '@configures': './src/configures',
          '@features': './src/features',
          '@navigation': './src/navigation',
          '@stores': './src/stores',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
