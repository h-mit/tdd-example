const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverageFrom: [
    'src/**/*.{js}',
    '!**/node_modules/**'
  ]
}
