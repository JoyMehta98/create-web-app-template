module.exports = {
  testEnvironment: "<rootDir>/testEnvironment.js",
  rootDir: __dirname,
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  setupFiles: ["react-app-polyfill/jsdom"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts", "jest-extended"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  transformIgnorePatterns: [
    `[\\/]node_modules[\\/].*$`,
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  collectCoverage: true,
  testMatch: ["<rootDir>/src/**/test.{ts,tsx}"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/**/*.d.ts"
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/routes/*",
    "<rootDir>/src/testUtils/*"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/src/routes/*",
    "<rootDir>/src/testUtils/*"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80
    }
  }
};
