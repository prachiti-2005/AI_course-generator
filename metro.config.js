// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// Add proper asset handling
config.resolver.assetExts.push(
  // Images
  'png',
  'jpg',
  'jpeg',
  'gif',
  'webp',
  // Fonts
  'ttf',
  'otf',
  'woff',
  'woff2'
);

// Improve caching
config.cacheStores = [
  config.cacheStores[0], // Keep the default in-memory cache
  {
    get: () => Promise.resolve(null),
    set: () => Promise.resolve(),
    clear: () => Promise.resolve()
  }
];

// Enable symlinks for better module resolution
config.resolver.enableSymlinks = true;

// Add watchFolders to include linked dependencies
config.watchFolders = [__dirname];

module.exports = config; 