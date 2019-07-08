// Good morning! Write a function that takes in a string, reverses the 'casing' of that string, and returns the "reversed-casing" string.

// const string = 'HELLO world!';

// console.log(reverseCase(string)); // <--- hello WORLD!

function reverseCase(str) {
  let newArray = str.split("");
  let caseReverse = newArray.map(function(x) {
    if (x === x.toUpperCase()) {
      return x.toLowerCase();
    } else if (x === x.toLowerCase()) {
      return x.toUpperCase();
    }
  });
  return caseReverse.join("");
}

const string = "HELLO world!";

console.log(reverseCase(string));
