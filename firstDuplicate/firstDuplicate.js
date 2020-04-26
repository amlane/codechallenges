/*
Given an array a that contains only numbers in the range from 1 to a.length, 
find the first duplicate number for which the second occurrence has the minimal index. 
In other words, if there are more than 1 duplicated numbers, return the number for 
which the second occurrence has a smaller index than the second occurrence of the 
other number does. If there are no such elements, return -1.
*/

function firstDuplicate(a) {
  // create a dictionary
  let duplicatesCount = {};

  // iterate through the list
  for (const item of a) {
    // if the item is in the duplicates count...
    // we know this means we will have a count of 2 if we increment, so this is our first dup pair with the 2nd value being the smallest index by default
    // if the item is not in the dups ht...
    // add it with the key being the item and value being 1
    if (duplicatesCount[item]) {
      return item;
    } else {
      duplicatesCount[item] = 1;
    }
  }
  return -1;
}

module.exports = {
  firstDuplicate,
};
