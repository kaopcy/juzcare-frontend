// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
   dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
   // Add more setup options before each test is run
   // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
   // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
   moduleDirectories: ['node_modules', '<rootDir>/'],
   testEnvironment: 'jest-environment-jsdom',
   verbose: true,
   moduleNameMapper: {
      '^@/graphql/(.*)$': `<rootDir>/src/graphql/$1`,
      '^@/routes/(.*)$': `<rootDir>/src/routes/$1`,
      '^@/redux/(.*)$': `<rootDir>/src/redux/$1`,
      '^@/slices/(.*)$': `<rootDir>/src/redux/slices/$1`,
      '^@/hooks/(.*)$': `<rootDir>/src/hooks/$1`,
      '^@/components/(.*)$': `<rootDir>/src/components/$1`,
      '^@/layouts/(.*)$': `<rootDir>/src/layouts/$1`,
      '^@/configs/(.*)$': `<rootDir>/src/configs/$1`,
      '^@/svg/(.*)$': `<rootDir>/src/svg/$1`,
      '^@/theme/(.*)$': `<rootDir>/src/theme/$1`,
      '^@/guards/(.*)$': `<rootDir>/src/guards/$1`,
      '^@/sections/(.*)$': `<rootDir>/src/sections/$1`,
      '^@/pages/(.*)$': `<rootDir>/src/pages/$1`,
      '^@/contexts/(.*)$': `<rootDir>/src/contexts/$1`,
      '^@/utils/(.*)$': `<rootDir>/src/utils/$1`,
      '^@/services/(.*)$': `<rootDir>/src/services/$1`,
      '^@/_mock/(.*)$': `<rootDir>/src/_mock/$1`,
   },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
