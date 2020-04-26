/*
Given a string s consisting of small English letters, find and return the first 
instance of a non-repeating character in it. If there is no such character, return '_'.
*/

function firstNotRepeatingCharacter(s) {
  let result = [];
  // create a storage object
  let storage = {};
  // iterate through the string
  // adding each item to the dictionary if it doesn't already exist and setting value to 1
  // if it does exist, increment the value to count
  for (const item of s) {
    if (!storage[item]) {
      storage[item] = 1;
      result.push(item);
    } else if (storage[item]) {
      storage[item] += 1;
    }
  }

  // iterate over the result array and look up in the dictionary
  for (const item of result) {
    if (storage[item] && storage[item] === 1) {
      return item;
    }
  }
  return "_";
}

module.exports = {
  firstNotRepeatingCharacter,
};
