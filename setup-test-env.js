import "@testing-library/jest-dom/extend-expect";

global.console = {
  log: jest.fn(), // console.log are ignored in tests
  warn: jest.fn(), // console.warn are ignored in tests

  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  error: console.error,
  info: console.info,
  debug: console.debug,
};
