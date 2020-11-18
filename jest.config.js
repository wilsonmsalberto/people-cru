module.exports = {
    collectCoverage    : true,
    collectCoverageFrom: [
        'context/**/*.{js,jsx,ts,tsx}',
        'pages/**/*.{js,jsx,ts,tsx}',
        'ui/**/*.{js,jsx,ts,tsx}',
        'views/**/*.{js,jsx,ts,tsx}',
    ],
    coverageThreshold: {
        global: {
            branches  : 80,
            functions : 80,
            lines     : 80,
            statements: 80,
        },
    },
    snapshotSerializers: [ '@emotion/jest/serializer' ],
    moduleNameMapper   : {
        '^mocks(.*)$'  : '<rootDir>/__mocks__/$1',
        '^context(.*)$': '<rootDir>/context/$1',
        '^pages(.*)$'  : '<rootDir>/pages/$1',
        '^ui(.*)$'     : '<rootDir>/ui/$1',
        '^views(.*)$'  : '<rootDir>/views/$1',
        '^utils(.*)$'  : '<rootDir>/utils/$1',
    },
    moduleFileExtensions    : [ 'ts', 'tsx', 'js', 'jsx' ],
    modulePathIgnorePatterns: [ '<rootDir>/coverage/' ],
    testPathIgnorePatterns  : [ 'dist' ],
    transform               : {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    verbose: true,
};
