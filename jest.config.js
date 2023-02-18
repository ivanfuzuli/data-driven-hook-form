module.exports = {
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\](?!some-esm-package).+\\.(js|jsx)$',
  ],
  setupFilesAfterEnv: ['<rootDir>/utils/setupTests.ts'],
};
