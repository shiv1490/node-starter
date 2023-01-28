import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ['dist'],
  collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}'],
};

export default config;
