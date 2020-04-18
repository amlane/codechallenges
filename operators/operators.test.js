const { negCheck, multiply, divide, modulo } = require("./operators");

describe("UnitTests for multiply", function () {
  it("should return 0 for an input of 0 x 0", function () {
    expect(multiply(0, 18)).toEqual(0);
  });
});

describe("UnitTests for divide", function () {
  it("should return 3 for an input of 10 / 3", function () {
    expect(divide(10, 3)).toEqual(3);
  });
});

describe("UnitTests for modulo", function () {
  it("should return 1 for an input of 10 x 3", function () {
    expect(modulo(10, 3)).toEqual(1);
  });
});

describe("UnitTests for negCheck", function () {
  it("should return an array as the result", function () {
    expect(Array.isArray(negCheck(12, 34))).toBe(true);
  });
});
