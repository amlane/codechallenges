/*
Create a function that will return true or false based on if a string 
is a palindrome (a word that reads the same backwards as it does forward.)
*/

function checkPalindromeStack(inputString) {
  // create a stack
  const stack = [];
  let counter = 0;
  // add the first half of the string to the stack
  for (let i = 0; i < Math.ceil(inputString.length / 2); i++) {
    stack.push(inputString[i]);
  }
  counter = Math.ceil(inputString.length / 2);
  // accounts for odd letter words
  if (inputString.length % 2 !== 0) {
    stack.pop();
  }

  while (counter < inputString.length) {
    // pop last item off stack
    let lastItem = stack.pop();
    // compare it to the current remaining char
    if (inputString[counter] !== lastItem) {
      return false;
    }
    counter += 1;
  }

  return stack.length > 0 ? false : true;
}

function checkPalindromeReverse(inputString) {
  const array = inputString.split("");
  const result = [];
  // reverse the string
  for (let i = inputString.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  // compare reversed string
  if (inputString === result.join("")) return true;
  return false;
}

module.exports = {
  checkPalindromeReverse,
  checkPalindromeStack,
};
