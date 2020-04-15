/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

var plusOne = function (digits) {
  // if the last element is 9:
  if (digits[digits.length - 1] === 9) {
    i = digits.length - 1;
    // while the item is 9,
    while (digits[i] === 9) {
      // change to 0
      digits[i] = 0;
      // iterate to next num in list going backwards
      i -= 1;
    }
    // if next num exists
    if (digits[i]) {
      // increment the number by 1
      digits[i] += 1;
    } else {
      // else add one to beginning of list
      digits.unshift(1);
    }
  } else {
    // add one to the last element in the digits array
    digits[digits.length - 1] += 1;
  }
  return digits;
};

module.exports = {
  plusOne,
};
