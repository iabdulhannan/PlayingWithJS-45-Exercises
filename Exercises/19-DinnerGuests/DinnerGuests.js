/*
* Dinner Guests: Working with one of the programs from Exercises 14 through 18,
* print a message indicating the number of people you are inviting to dinner.
* */


/*Working with program 14*/
let guests = ["Kane Williamson", "Trent Boult", "Shane Watson"]
for (const guest of guests) {
  console.log(`Hello Mr. ${guest}! Would like to join me at dinner tonight?`)
}

console.log("Total people invited to dinner: ", guests.length)