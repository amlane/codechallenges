/*
Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value:

toBinaryString(6) should return "110" (no leading 0).

Use of the native method number.toString(2);  is disallowed.
*/

function toBinaryString(n) {
  let result = "";
  let num = n; // do not mutate original value

  if (num === 0) return (result = "0");

  // while num is not 0
  while (num > 0) {
    // add a 0 or 1 to the result string
    result = (num % 2) + result;
    // halve the num and repeat until num is less than 1
    num = Math.floor(num / 2);
  }
  return result;
}

/*
First pass solution 

function toBinaryString(number) {
  result = "";

  // set a list of binary values: etc..., 128, 64, 32, 16, 8, 4, 2, 1
  binaryList = [];
  let currentNum = 1;
  for (i = 0; i < (number.toString().length + 2) * 3; i++) {
    binaryList.unshift(currentNum);
    currentNum *= 2;
  }
  // iterate through the list
  for (let i = 0; i < binaryList.length; i++) {
    // subtracting each value that is greater than number
    if (number >= binaryList[i]) {
      number -= binaryList[i];
      result += "1";
      // add a 0 to any skipped numbers once we've started a result
    } else if (result.length > 0 && number < binaryList[i]) {
      result += "0";
    }
  }
  // handle 0 case
  if (result.length === 0) {
    result += "0";
  }
  return result;
}
*/

module.exports = {
  toBinaryString,
};
