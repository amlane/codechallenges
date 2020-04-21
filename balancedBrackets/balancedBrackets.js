/*
Write a function balancedBrackets that accepts a string and returns true if the parentheses
are balanced and false otherwise. For this test we will be accepting: [], {}, () and ||  
*/

// Stack solution
function balancedBrackets(str) {
  let stack = [];
  let pipeFound = false;
  let left = {
    "{": true,
    "[": true,
    "(": true,
  };
  let opposite = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  // check each character in the string
  for (const key of str) {
    // if the character is a left
    if (left[key]) {
      // add it to the stack
      stack.push(key);
      // mark pipeFound as false
      pipeFound = false;
    }
    // if the character is a pipe...
    if (key === "|") {
      stack.push(key);
      pipeFound = !pipeFound;
    }

    // if the character is a right
    if (key === "}" || key === "]" || key === ")") {
      // pop the last item off the stack
      let lastItem = stack.pop();
      // handles if there are several pairs of pipes
      while (lastItem === "|") {
        // if last item is a pipe,
        // if pipeFound is true...
        if (pipeFound) {
          // check if there's another pipe at the end of the stack
          // if there is not return false
          if (stack[stack.length - 1] !== "|") return false;
          // if there is that's a valid pair
          // pop off the additional pipe
          stack.pop();
          // update last item to the next item at end of list
          lastItem = stack.pop();
        }
        // if pipeFound is false...
        if (!pipeFound) {
          // that's an incomplete pair, pop another one off
          stack.pop();
          // then update last item
          lastItem = stack.pop();
        }
      }
      // once you have no pipes left in the stack
      // make sure the right bracket matches the opposite of the last item in the stack
      // if not, it's not valid
      if (opposite[lastItem] !== key) return false;
    }
    // if the character does match, continue until no characters left in the string
  }
  // handles single character strings and leftover pipes
  if (stack.length % 2 !== 0) return false;
  return true;
}

module.exports = {
  balancedBrackets,
};
