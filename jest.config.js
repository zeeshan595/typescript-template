const { defaults } = require("jest-config");

module.exports = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  testMatch: ["<rootDir>/dist/tests/*.js"]
};
