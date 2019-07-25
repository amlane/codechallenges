console.log("********** Exercise 1 of 4 **********");
const unimaginativeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write a "for" loop that console.log()'s the "zeroeth"
// value in the unimaginitiveArray, and thereafter every
// third value of the unimaginativeArray, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.
// What is "zeroeth"? Has the word "first" become
// ambiguous now that I am a computer scientist? (Hint: yes).

for (let i = 0; i < unimaginativeArray.length; i += 3) {
  console.log(i);
}

console.log("\n********** Exercise 2 of 4 **********");
const nameArray = [
  "Jacquelynn",
  "Csaba",
  "Ellen",
  "Moises",
  "Cole",
  "Jeff",
  "Dre'Sean"
];
// Write a console.log() that displays the last value in
// nameArray. Use the `.length` property of array's
// to access the last value. What's going on with that
// slash in Dre'Sean's name?

console.log(nameArray[nameArray.length - 1]);

console.log("\n********** Exercise 3 of 4 **********");
const adjectiveArray = [
  "awesome",
  "fantastic",
  "amazing",
  "wonderful",
  "fabulous",
  "incredible",
  "marvelous"
];
// Using both nameArray and adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Use the string "is"
// to combine the name with the adjective. For example:
// "Jacquelynn is awesome"
// "Csaba is fantastic" et cetera...
for (let i = 0; i < nameArray.length; i++) {
  for (let j = 0; j < 1; j++) {
    console.log(nameArray[i] + " is " + adjectiveArray[i]);
  }
}

console.log("\n********** Exercise 4 of 4 **********");
// Write a "for" loop that console.log()'s every third
// number in unimaginativeArray but initialize the
// iterator so it doesn't console.log() the zero.

for (let i = 3; i < unimaginativeArray.length; i += 3) {
  console.log(i);
}

/* SELF-STUDY QUESTION
1. What do you think is going on with those slashes in the strings?
2. What does the \n do in the Exercise titles?
3. What does the \ do in Dre'Sean's name?

Search the internet for "JS String" or "MDN String" and write a
brief answer below. MDN is the acronym for the Mozilla Developer
Network. They've got great documentation for JavaScript!

Write your answers in here:
1.

2.

3.

*/
