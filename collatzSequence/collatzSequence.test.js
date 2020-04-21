const { collatzSequence } = require("./collatzSequence");

describe("UnitTests", function () {
  it("level 1 test", function () {
    expect(collatzSequence(23)).toEqual([
      23,
      70,
      35,
      106,
      53,
      160,
      80,
      40,
      20,
      10,
      5,
      16,
      8,
      4,
      2,
      1,
    ]);
  });
  it("should return an array", function () {
    expect(Array.isArray(collatzSequence(30))).toBe(true);
  });
});
