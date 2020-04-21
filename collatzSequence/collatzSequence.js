/*
Write a function which takes a positive integer number as an argument and returns 
it's "Collatz chain". The Collatz chain will stop at one.

Named after Lothar Collatz, the "Collatz conjecture" defines a sequence of numbers. 
That sequence is the Collatz "chain". Starting with a positive integer, 
the Collatz conjecture determines the next integer in the chain until the number 1 is obtained.

Your Collatz algorithm will evaluate the integer and then, 
depending on the condition of the integer, perform the following tasks:

    If the integer is even, then halve the number.
    If the integer is not even, then multiply it by 3 and add one.


An example chain starting from the number 23 looks like this:

[23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]

Your function should behave like this:

console.log(collatzSequence(23)); 
output -> [ 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1 ]
*/

function collatzSequence(n) {
  if (n < 1) return "Not a valid entry, must be a positive integer";
  let results = [n];

  while (true) {
    let lastItem = results[results.length - 1];
    // if last item is one
    if (lastItem === 1) {
      // return the list
      return results;
    }
    // if last item is even
    if (lastItem % 2 === 0) {
      // halve it and add it to the list
      n /= 2;
      results.push(n);
    }
    // if last item is odd
    if (lastItem % 2 !== 0) {
      //multiple by 3 add 1 and add it to the list
      n = n * 3 + 1;
      results.push(n);
    }
  }
}

module.exports = {
  collatzSequence,
};
