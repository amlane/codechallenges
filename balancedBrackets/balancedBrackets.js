/*
Write a function balancedBrackets that accepts a string and returns true if the parentheses are balanced and false otherwise. For this test we will be accepting: [], {}, () and ||  
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
      // add it to the stack
      stack.push(key);
      pipeFound = !pipeFound;
    }

    // if the character is a right
    if (key === "}" || key === "]" || key === ")") {
      // pop the last item off the stack
      let lastItem = stack.pop();

      // if last item is a pipe,
      if (lastItem === "|") {
        // if pipeFound is true...
        if (pipeFound) {
          // check if there's another pipe to the right
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
          // that's a complete pair, pop another one off
          stack.pop();
          // then update last item
          lastItem = stack.pop();
        }
        // finally check to see the non-pipe bracket is a valid pair
        if (opposite[lastItem] !== key) return false;
      }
      // if lastItem is not a pipe,
      // check if it's a matching pair and that we're not missing a pipe
      else if (opposite[lastItem] !== key || pipeFound) return false;
    }
    // if the character does match and pipe found is false, continue
  }
  // handles 1 character strings and leftover brackets/pipes
  if (stack.length % 2 !== 0) return false;
  return true;
}

module.exports = {
  balancedBrackets,
};
