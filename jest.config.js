module.exports = {
  automock: false,
  collectCoverage: true,
  collectCoverageFrom: ['./**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '^context(.*)$': '<rootDir>/context/$1',
    '^pages(.*)$': '<rootDir>/pages/$1',
    '^ui(.*)$': '<rootDir>/ui/$1',
    '^views(.*)$': '<rootDir>/views/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/coverage/'],
  setupFiles: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
};
