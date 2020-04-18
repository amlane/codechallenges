const { romanNumeralize } = require("./romanNumeralize");

describe("UnitTests", function () {
  it("should return X for an input of 10", function () {
    expect(romanNumeralize(10)).toEqual("X");
    expect(romanNumeralize(11)).toEqual("XI");
    expect(romanNumeralize(22)).toEqual("XXII");
    expect(romanNumeralize(1000)).toEqual("M");
    expect(romanNumeralize(1001)).toEqual("MI");
    expect(romanNumeralize(1990)).toEqual("MCMXC");
    expect(romanNumeralize(2007)).toEqual("MMVII");
    expect(romanNumeralize(2008)).toEqual("MMVIII");
    expect(romanNumeralize(59)).toEqual("LIX");
    expect(romanNumeralize(95)).toEqual("XCV");
    expect(romanNumeralize(50)).toEqual("L");
    expect(romanNumeralize(45)).toEqual("XLV");
    expect(romanNumeralize(591)).toEqual("DXCI");
    expect(romanNumeralize(985)).toEqual("CMLXXXV");
    expect(romanNumeralize(519)).toEqual("DXIX");
    expect(romanNumeralize(487)).toEqual("CDLXXXVII");
    expect(romanNumeralize(919)).toEqual("CMXIX");
    expect(romanNumeralize(999)).toEqual("CMXCIX");
  });
  it("should return nulla for an input of 0", function () {
    expect(romanNumeralize(0)).toEqual("nulla");
  });
  it("should return a string", function () {
    expect(typeof romanNumeralize(1345)).toBe("string");
  });
});
