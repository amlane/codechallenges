/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function (s) {
  let q = [];
  let letterDict = {};
  let result = 0;
  let count = 0;

  // iterate through the list one letter at a time
  for (let i of s) {
    // if the letter is not in the hash table, add it to the queue
    // add 1 to the count
    // add letter to dictionary
    if (!letterDict[i]) {
      q.push(i);
      count += 1;
      letterDict[i] = 1;
    }

    // if the letter is in the hashtable
    else if (letterDict[i]) {
      // first we add the letter to the queue
      q.push(i);
      // remove the first item from the queue stopping after you reach the matching letter
      while (q[0] !== i && q.length > 1) {
        q.shift();
      }
      // take care of the matching letter
      q.shift();
      // if the count is greater than result, replace result with count
      if (count > result) {
        result = count;
      }
      // clear the dictionary
      letterDict = {};
      for (let l of q) {
        letterDict[l] = 1;
      }
      // clear the count but include this letter
      count = q.length;
    }
  }
  // check if the current count is greater than the largest count so far
  if (count > result) {
    result = count;
  }
  // return result
  return result;
};

module.exports = {
  lengthOfLongestSubstring,
};
