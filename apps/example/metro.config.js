const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const path = require('path');
const nm = ['node', 'modules'].join('_');
const config = {
  watchFolders: [
    path.resolve(__dirname, '../../', nm),
    path.resolve(__dirname, '../../packages/react-native-carplay'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
