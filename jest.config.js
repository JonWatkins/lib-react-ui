export default {
  setupFiles: ["<rootDir>/src/__mocks__/setup.js"],
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  verbose: false,
};
