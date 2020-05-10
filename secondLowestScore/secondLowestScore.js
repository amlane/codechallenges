/*
Given the names and grades for each student in a Physics class of
students, store them in a nested list and print the name(s) of any student(s) 
having the second lowest grade.

Note: If there are multiple students with the same grade, order their names 
alphabetically and print each name on a new line.

Input Format

The first line contains an integer, N, the number of students.
The subsequent lines describe each student over 2 lines; 
the first line contains a student's name, and the second line contains their grade.

Constraints:
 * 2 <= N <= 5
 * There will always be one or more students having the second lowest grade.

Output Format

Print the name(s) of any student(s) having the second lowest grade in Physics; 
if there are multiple students, order their names alphabetically and print each 
one on a new line.
*/

function secondLowestScore(students) {
  let lowestScore = Infinity;
  let secondLowestScore = Infinity;
  for (let s of students) {
    if (s[1] < lowestScore) {
      secondLowestScore = lowestScore;
      lowestScore = s[1];
    } else if (s[1] > lowestScore && s[1] < secondLowestScore) {
      secondLowestScore = s[1];
    }
  }
  let secondLowestNames = [];
  for (let s of students) {
    if (s[1] === secondLowestScore) {
      secondLowestNames.push(s[0]);
    }
  }
  secondLowestNames.sort();
  for (let name of secondLowestNames) {
    console.log(name);
    return name;
  }
}

module.exports = {
  secondLowestScore,
};
