const { plusOne } = require("./plusOne");

describe("UnitTests", function () {
  it("should treat the list like a number and increment by 1", function () {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([9])).toEqual([1, 0]);
    expect(plusOne([1, 9])).toEqual([2, 0]);
    expect(plusOne([3, 9])).toEqual([4, 0]);
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});
