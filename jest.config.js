/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jsdom",
    verbose: true,
    preset: 'ts-jest',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
  };
};