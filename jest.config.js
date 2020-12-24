/* eslint-disable import/unambiguous, import/no-commonjs */

module.exports = {
  snapshotResolver: '<rootDir>/src/configs/jest/snapshotResolver.js',
  watchPathIgnorePatterns: ['<rootDir>/node_modules'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/configs/jest/setup.js'],
};
