const { checkPalindromeStack } = require("./checkPalindrome");

describe("UnitTests for checkPalindromeStack", function () {
  it("should check if word is a valid palindrome", function () {
    expect(checkPalindromeStack("rabbit")).toEqual(false);
    expect(checkPalindromeStack("madam")).toEqual(true);
    expect(checkPalindromeStack("racecar")).toEqual(true);
    expect(checkPalindromeStack("dammit i'm mad")).toEqual(false);
  });
});
