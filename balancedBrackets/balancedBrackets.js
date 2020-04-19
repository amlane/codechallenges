/*
Write a function balancedBrackets that accepts a string and returns true ifthe parentheses are balanced and false otherwise.
*/

// Stack solution
function balancedBrackets(str) {
  let stack = [];
  let bracketDict = {
    "{": "left",
    "[": "left",
    "(": "left",
    "]": "right",
    "}": "right",
    ")": "right",
  };
  let oppositeBracket = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  // check each bracket in the string
  for (const key of str) {
    if (bracketDict[key] === "left") {
      // if the bracket is left, add it to the stack and move to the next char
      stack.push(key);
    } else if (bracketDict[key] === "right") {
      // if the bracket is right,
      let lastItem = stack.pop();
      // check the stack to see if it's left match is on the stack
      if (oppositeBracket[lastItem] !== key) {
        // if it's not, return false
        return false;
      }
    }
  }
  if (!stack.length) return true;
  return false;
}

module.exports = {
  balancedBrackets,
};
