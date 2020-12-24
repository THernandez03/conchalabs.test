/* eslint-disable import/unambiguous, import/no-commonjs */

const path = require('path');

module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    const testDirectory = path.dirname(testPath);
    const testFilename = path.basename(testPath);

    return `${testDirectory}/${testFilename}${snapshotExtension}`;
  },
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath.slice(0, -snapshotExtension.length),
  testPathForConsistencyCheck: 'src/components/Component.spec.js',
};
