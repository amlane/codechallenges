/*
Implement four functions called multiply, divide, modulo, and negCheck. The first three functions should multiply, divide, or return the remainder of two arguments after invoking negCheck upon the two numbers.

Now for the tricky part: you can only use + and - to implement these functions.
Do not use the JavaScript operators for multiply, divide and modulo: * / %

The negCheck function needs to indicate whether or not the resulting product, quotient and remainder would be positive or negative. Use a Boolean value to indicate this (you can use the not operator ! to toggle the Boolean value.) negCheck should return an array with that Boolean having converted num1 and num2 into positive integers.

Hint: divide should drop the remainder.
NOTE: the test suite will check to see if you are using the * / or % operators. This test will fail if you have commented out code within your functions.
*/

function negCheck(num1, num2) {
  let isNeg = false;
  let result = [];
  if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)) {
    result.push(isNeg);
  }
  if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
    result.push(!isNeg);
  }
  result.push(Math.abs(num1), Math.abs(num2));
  return result;
}

function multiply(x, y) {
  let array = negCheck(x, y);
  let result = 0;
  for (let i = 0; i < array[2]; i++) {
    result += array[1];
  }
  if (negCheck(x, y)[0]) return -result;
  return result;
}

function divide(x, y) {
  let array = negCheck(x, y);
  let count = 0;
  let result = array[1];
  while (result >= array[2]) {
    result -= array[2];
    count += 1;
  }
  if (negCheck(x, y)[0]) return -count;
  return count;
}

function modulo(x, y) {
  let array = negCheck(x, y);
  let result = array[1];
  while (result >= array[2]) {
    result -= array[2];
  }
  if ((negCheck(x, y)[0] && x < 0) || (negCheck(x, y)[0] === false && x < 0))
    return -1;
  return result;
}

module.exports = {
  negCheck,
  multiply,
  divide,
  modulo,
};
