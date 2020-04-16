/*
Complete the function so that it converts dash-delimited ("kebab" case) & underscore-delimited ("snake" case) words into "camel" casing. The first word within the output should be capitalized only if the original word was capitalized.

toCamelCase("the-stealth-warrior") returns "theStealthWarrior"
toCamelCase("The_stealth_warrior") returns "TheStealthWarrior"
*/

function toCamelCase(str) {
  wordList = str.split("");
  result = [];

  // for each letter if it equals a -, _ or " ", do not append to result
  let i = 0;
  let skipped = false;
  while (i < wordList.length) {
    // if skipped is false and letter is valid
    if (
      skipped === false &&
      wordList[i] !== "-" &&
      wordList[i] !== "_" &&
      wordList[i] !== " "
    ) {
      // append the letter to results
      result.push(wordList[i]);
    } else if (
      wordList[i] === "-" ||
      wordList[i] === "_" ||
      wordList[i] === " "
    ) {
      skipped = true;
    } else if (
      skipped === true &&
      wordList[i] !== "-" &&
      wordList[i] !== "_" &&
      wordList[i] !== " "
    ) {
      // capitalize the letter and append to results
      result.push(wordList[i].toUpperCase());
      // return skipped to false
      skipped = false;
    }
    // increment i
    i += 1;
  }
  // return result as a string
  return result.join("");
}

module.exports = {
  toCamelCase,
};
