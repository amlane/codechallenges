/*
Good morning! Write a function that takes an array of strings and return the longest string in the array.
For example:
const strings1 = ['short', 'really, really long!', 'medium'];
console.log(longestString(strings1)); // <--- 'really, really long!'

Edge case: If you had an array which had two "longest" strings of equal length, your function should just return the first one.
For example:
const strings2 = ['short', 'first long string!!', 'medium', 'abcdefghijklmnopqr'];
console.log(longestString(strings2)); // <--- 'first long string!'
*/

function longestString(arr) {
  let longestWord = arr.sort((a, b) => a.length - b.length).pop();
  return longestWord;
}

const strings1 = ["short", "really, really long!", "medium"];
console.log(longestString(strings1));

const strings2 = [
  "short",
  "first long string!!",
  "medium",
  "abcdefghijklmnopqr"
];
console.log(longestString(strings2));

/*
Good morning! Write a function called reverseString that accepts a string and returns a reversed copy of the string.
Input Example:

'hello world'
'asdf'
'CS rocks!'

Output Example:
'dlrow olleh'
'fdsa'
'!skcor SC'
*/

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(reverseString("enitlavo erom knirD"));

/*
Good morning! Write a function called reverseNumber that reverses a number.

Input Example: 
12345
555

Output Example:  
54321
555
*/

function reverseNumber(num) {
  return parseFloat(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  );
}

console.log(reverseNumber(12345));
