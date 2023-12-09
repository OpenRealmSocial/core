import type { Config } from 'jest';

const jestConfig: Config = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^(.+)_generated.js$': '$1_generated', // Support flatc generated files
  },
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  testPathIgnorePatterns: ['<rootDir>/build', '<rootDir>/node_modules'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
};

export default jestConfig;
