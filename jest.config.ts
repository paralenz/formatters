import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  logHeapUsage: true,
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts)$',
  testPathIgnorePatterns: [
    'dist'
  ],
  snapshotFormat: {
    printBasicPrototype: true,
    escapeString: true
  }
};

export default config;