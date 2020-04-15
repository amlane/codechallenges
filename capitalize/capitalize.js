/* 
You are asked to ensure that the first and last names of people begin with a capital letter in their passports. For example, alison heck should be capitalised correctly as Alison Heck.

Given a full name, your task is to capitalize the name appropriately.

Input Format

A single line of input containing the full name, S.

Constraints
    - 0 < len(S) < 1000
    - The string consists of alphanumeric characters and spaces.

Note: in a word only the first character is capitalized. Example 12abc when capitalized remains 12abc.

Output Format

Print the capitalized string, S.

Sample Input: `chris alan`

Sample Output: `Chris Alan`

*/

// JavaScript Solution

function capitalize(s) {
  const nameList = s.split(" ");
  const newList = [];

  for (const word of nameList) {
    newList.push(word[0].toUpperCase() + word.slice(1));
  }

  return newList.join(" ");
}

//  Python Solution

/* 
def solve(s):
  name_list = s.split(" ")
  new_list = []
  
  for word in name_list:
      new_list.append(word.capitalize())
  
  return " ".join(new_list)
*/

module.exports = {
  capitalize,
};
