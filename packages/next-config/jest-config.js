'use strict';

const nextJest = require('next/jest');

/**
 * Learn more about customizing jest
 * @see https://jestjs.io/docs/configuration
 * @param {Object} options - The options.
 * @param {string} options.projectRoot - The project root.
 * @param {Object} options.customConfig - Jest custom config.
 */
function makeConfig({ projectRoot, customConfig = {} }) {
  const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: projectRoot,
  });

  // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
  const config = createJestConfig({
    testEnvironment: 'jest-environment-jsdom',
    clearMocks: true,
    maxWorkers: 10,
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      // Ignore the stories
      '!src/**/*.stories.*',
      // Ignore the generated files
      '!src/**/*.gen.*',
      // Ignore the server components
      '!src/app/**/*',
    ],
    setupFilesAfterEnv: ['jest-extended/all', '<rootDir>/jest.setup.js'],
    ...customConfig,
  });
  return config;
}

module.exports = {
  makeConfig,
};
