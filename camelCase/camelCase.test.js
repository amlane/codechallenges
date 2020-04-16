const { toCamelCase } = require("./camelCase");

describe("UnitTests", function () {
  it("should remove any spaces from the string", function () {
    expect(toCamelCase("The stealth warrior")).toEqual("TheStealthWarrior");
  });
  it("should remove any underscores from the string", function () {
    expect(toCamelCase("The_stealth_warrior")).toEqual("TheStealthWarrior");
  });
  it("should remove any hyphens from the string", function () {
    expect(toCamelCase("the-stealth-warrior")).toEqual("theStealthWarrior");
  });
  it("should remove any mixture of spaces, underscores and hypens from the string", function () {
    expect(toCamelCase("The_stealth-warrior test")).toEqual(
      "TheStealthWarriorTest"
    );
  });
});
