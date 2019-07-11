// Good morning! Write a function called sortString that takes a string of letters and returns a string with the letters sorted in alphabetical order.

// Input:

// 'dcba'
// 'zycxbwa'

// 'AzycxbCwBaA'

// Expected Output:

// 'abcd'
// 'abcwxyz'

// 'AABCabcwxyz'

function sortString(str) {
  return str
    .split("")
    .sort()
    .join("");
}

console.log(sortString("dcba"));
console.log(sortString("zycxbwa"));
console.log(sortString("AzycxbCwBaA"));

// Expected function: `commonElements`

// Write a function called `commonElements` that has parameters for two arrays.  Return an array of all items that are present in both arrays.  Do not modify the arrays that are passed in.

//  Input Example:
// ```
// [1, 2, 3, 4] [3, 4, 5, 6]
// ['a', 'b', 'c'] ['x', 'y', 'z', 'a']
// [1, 2, 3] [4, 5, 6]
// ```
// Output Example:
// ```
// [3, 4]
// ['a']
// []
// ```
// Required for submission:
// ```
// module.exports = {
//   commonElements
// }
// ```
