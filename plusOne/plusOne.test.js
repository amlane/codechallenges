const { plusOne } = require("./plusOne");

describe("UnitTests", function () {
  it("123 input should return 124 output", function () {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });
  it("should increment the next digit if last digit is 9", function () {
    expect(plusOne([1, 9])).toEqual([2, 0]);
    expect(plusOne([3, 9])).toEqual([4, 0]);
  });
  it("should add 1 to the beginning if all digits are 9", function () {
    expect(plusOne([9])).toEqual([1, 0]);
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});
