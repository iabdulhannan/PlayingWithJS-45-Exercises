/*
* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
* The text of each message should be the same, but each message should be personalized with the person’s name.
* */

let namesArray = ["Kane", "Williamson", "Chapman", "Southee", "Trent", "Boult"]
for (const name of namesArray) {
  console.log(`Hy! I'm ${name}, nice to meet you`)
}