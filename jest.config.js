const nextJest = require("next/jest.js");

const createJestConfig = nextJest({ dir: "." });

const customJestConfig = {
  clearMocks: true,
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
