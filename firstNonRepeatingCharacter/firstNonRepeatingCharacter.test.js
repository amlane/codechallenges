const { firstNotRepeatingCharacter } = require("./firstNonRepeatingCharacter");

describe("UnitTests for firstNotRepeatingCharacter", function () {
  it("should return the value of the first non repeated character", function () {
    expect(firstNotRepeatingCharacter("abacabad")).toEqual("c");
    expect(
      firstNotRepeatingCharacter("abcdefghijklmnopqrstuvwxyziflskecznslkjfabe")
    ).toEqual("d");
    expect(
      firstNotRepeatingCharacter(
        "xdnxxlvupzuwgigeqjggosgljuhliybkjpibyatofcjbfxwtalc"
      )
    ).toEqual("d");
  });
  it("should return an underscore if there is no non repeating character", function () {
    expect(firstNotRepeatingCharacter("abacabaabacaba")).toEqual("_");
    expect(firstNotRepeatingCharacter("zzz")).toEqual("_");
  });
});
