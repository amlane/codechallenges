const { lengthOfLongestSubstring } = require("./lengthOfLongestSubstring");

describe("UnitTests for lengthOfLongestSubstring", function () {
  it("level 1 tests", function () {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  });
  it("level 2 tests", function () {
    expect(lengthOfLongestSubstring(" ")).toEqual(1);
    expect(lengthOfLongestSubstring("au")).toEqual(2);
  });
  it("level 3 tests", function () {
    expect(lengthOfLongestSubstring("dvdf")).toEqual(3);
  });
});
