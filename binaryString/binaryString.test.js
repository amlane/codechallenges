const { toBinaryString } = require("./binaryString");

describe("UnitTests", function () {
  it("should return 0 if the input is 0", function () {
    expect(toBinaryString(0)).toEqual("0");
  });
  it("should return a string", function () {
    expect(typeof toBinaryString(0)).toBe("string");
    expect(typeof toBinaryString(1210)).toBe("string");
    expect(typeof toBinaryString(13)).toBe("string");
  });
  it("random number tests", function () {
    expect(toBinaryString(1)).toEqual("1");
    expect(toBinaryString(2)).toEqual("10");
    expect(toBinaryString(3)).toEqual("11");
    expect(toBinaryString(4)).toEqual("100");
    expect(toBinaryString(5)).toEqual("101");
    expect(toBinaryString(6)).toEqual("110");
    expect(toBinaryString(7)).toEqual("111");
    expect(toBinaryString(8)).toEqual("1000");
    expect(toBinaryString(9)).toEqual("1001");
    expect(toBinaryString(10)).toEqual("1010");
    expect(toBinaryString(11)).toEqual("1011");
    expect(toBinaryString(12)).toEqual("1100");
    expect(toBinaryString(13)).toEqual("1101");
    expect(toBinaryString(14)).toEqual("1110");
    expect(toBinaryString(15)).toEqual("1111");
    expect(toBinaryString(16)).toEqual("10000");
  });
  it("long number test", function () {
    expect(toBinaryString(1111111111111)).toEqual(
      "10000001010110011011000100001000111000111"
    );
  });
});
