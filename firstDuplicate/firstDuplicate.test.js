const { firstDuplicate } = require("./firstDuplicate");

describe("UnitTests for firstDuplicate", function () {
  it("should return the value of the first duplicate found in the array", function () {
    expect(firstDuplicate([2, 1, 3, 5, 3, 2])).toEqual(3);
    expect(firstDuplicate([1, 1, 2, 2, 1])).toEqual(1);
  });
  it("should return -1 if there are no such pairs in that list", function () {
    expect(firstDuplicate([2, 1])).toEqual(-1);
    expect(firstDuplicate([2, 4, 3, 5, 1])).toEqual(-1);
  });
});
