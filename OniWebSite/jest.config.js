module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/utils/mocks/fileMock.js',
    '^@common/(.*)$': '<rootDir>/src/components/common/$1',
    '^@common': '<rootDir>/src/components/common',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@constants': '<rootDir>/src/constants',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@pages': '<rootDir>/src/pages',
    '^@utils$': '<rootDir>/src/utils/index',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@gql/(.*)$': '<rootDir>/src/gql/$1',
    '^@gql': '<rootDir>/src/gql',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@styles/styled': '<rootDir>/src/styles/styled.ts',
  },
  globals: {
    'ts-jest': {
      diagnostics: {
        //   ignore error in tests that something is declared but its value is never read.
        ignoreCodes: [6133],
      },
    },
  },
};
