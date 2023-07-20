// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  coverageAnalysis: "perTest",
  ignoreStatic: true,
  incremental: true,
  mutate: ['src/**/*.{ts,tsx}', '!src/**/*.spec.{ts,tsx}'],
  ignorePatterns: ['src/**/*.stories.{ts,tsx}']
};

export default config;
