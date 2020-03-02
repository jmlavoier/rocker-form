
module.exports = {
  setupFilesAfterEnv: ['../jest/setup.js'],
  coverageDirectory: '../coverage',
  unmockedModulePathPatterns: [
    'react',
    'enzyme',
    'jest-enzyme',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  rootDir: '../src',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
