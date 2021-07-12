module.exports = {
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/mocks/style-mock.js',
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: ['node_modules', '.cache'],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/_app.tsx', '!coverage'],
};
