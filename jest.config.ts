import path from 'path';
import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/*.stories.tsx',
    '!**/src/shared/assets/**',
    '!**/src/shared/config/**',
    '!**/src/shared/constants/**',
    '!**/src/shared/testing/**',
    '!**/src/shared/types/**',
    '!**/*.d.ts',
    '!**/src/index.tsx',
  ],
  coverageDirectory: "coverage",
  globals: {
    __IS_DEV__: true,
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|scss)$': path.join(__dirname, './src/shared/testing/mock-object.ts'),
    '\\.svg$': path.join(__dirname, './src/shared/testing/mock-svg.ts'),
  },
  setupFilesAfterEnv: [path.join(__dirname, './src/shared/config/jest.ts')],
  testEnvironment: "jsdom",
  testMatch: ['<rootDir>/src/**/__tests__/**/*.[jt]s?(x)'],
  transform: {
    '.(js|jsx|ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
};

export default config;
