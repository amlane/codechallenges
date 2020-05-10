const { secondLowestScore } = require("./secondLowestScore");

describe("UnitTests for secondLowestScore", function () {
  it("should console.log the names of the student(s) who have the 2nd lowest score", function () {
    let studentsList1 = [
      ["Tina", 37.2],
      ["Akriti", 41],
      ["Harsh", 39],
    ];
    let studentsList2 = [
      ["Harry", 37.21],
      ["Tina", 37.2],
      ["Akriti", 41],
      ["Harsh", 39],
    ];
    let studentsList3 = [
      ["Harry", 37.21],
      ["Berry", 37.21],
      ["Tina", 37.2],
      ["Akriti", 41],
      ["Harsh", 39],
    ];

    expect(secondLowestScore(studentsList1)).toBe("Harsh");
    expect(secondLowestScore(studentsList2)).toBe("Harry");
    expect(secondLowestScore(studentsList3)).toBe("Berry", "Harry");
  });
});
