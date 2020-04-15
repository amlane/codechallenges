const { capitalize } = require("./capitalize");

describe("UnitTests", function () {
  it("should capitalize the first letter of each word", function () {
    expect(capitalize("amanda lane")).toEqual("Amanda Lane");
  });
});
