/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// module.exports = {
//   resolver: {
//     sourceExts: ['jsx', 'js', 'ts', 'tsx', 'svg'], //add here
//   },
//   assets: ['./android/app/src/main/assets/fonts'],
//   transformer: {
//     babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// };

// const {getDefaultConfig} = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: {sourceExts, assetExts},
//   } = await getDefaultConfig();

//   return {
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx', 'svg'],
//     },
//   };
// })();

module.exports = {
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx'], //add here
  },
  // assets: ['./android/app/src/main/assets/fonts'],
};
