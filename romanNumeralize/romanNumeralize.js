/* 
Define a function that takes in a positive integer and returns the Roman Numeral representation of that number.  

Great question for an interview would be - "Are there any constraints on the input? If not, how do you want me to handle an input of 0?"
*/

function romanNumeralize(n) {
  // create a dictionary to rep roman num values
  let romanNumeralDict = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  let numArray = Object.keys(romanNumeralDict);
  let result = "";
  let i = numArray.length - 1;
  // handles if our input is 0
  if (n === 0) return "nulla";
  // while our input is greater than 0
  while (n > 0) {
    if (n >= numArray[i]) {
      // add the corresponding letter to the result string
      result += romanNumeralDict[numArray[i]];
      // subtract the greatest value in the dictionary not > n
      n -= numArray[i];
    } else {
      // only increment pointer if n is greater than current pointer
      i -= 1;
    }
  }
  return result;
}

module.exports = {
  romanNumeralize,
};
