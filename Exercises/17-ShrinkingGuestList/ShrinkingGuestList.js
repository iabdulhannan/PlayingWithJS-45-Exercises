/*
* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
* Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list.
* Print your list to make sure you actually have an empty list at the end of your program.
* */




let guests = ["Kane Williamson", "Trent Boult", "Shane Watson"]
for (let i = 0; i < guests.length; i++) {
  console.log(`Hello Mr. ${guests[i]}! Would like to join me at dinner tonight?`)

  if (i === guests.length - 1) {
    console.log(`Oh! ${guests[i]} cannot make it to dinner. Inviting Mahindra Singh Dhoni instead....`)
    guests[i] = "Mahindra Singh Dhoni"

    console.log("Changed Guest list:")

    for (const guest of guests) {
      console.log(`Hello Mr. ${guest}! Would like to join me at dinner tonight?`)
    }

  }

}

console.log("We found a bigger dining table. Inviting more guests")
guests.unshift("Imran Khan")
guests.push('Salman Khan')
guests.splice(guests.length / 2, 0, "Shah Rukh Khan")

/*append() is not a function*/
for (const guest of guests) {
  console.log(`Hello Mr. ${guest}! Would like to join me at dinner tonight?`)
}

console.log("\nI'm so sorry, new dinner table won't be available oon time so I have to shrink my guests list...\n")

// let i = 0
while (guests.length > 2){
  console.log(`I'm Sorry Mr. ${guests.pop()}, I cannot invite you today. I regret any inconvenience caused`)
}

console.log(guests)

for (const guest of guests) {
  console.log(`Hello Mr. ${guest}! Despite some troubles, you are still invited to dinner. Hope to see you!`)
}


console.log('\nEmptying the Guest List...\n')

while (guests.length){
  guests.pop()
}

console.log("Guest List: ", guests)