/*
* More Guests: You just found a bigger dinner table, so now more space is available.
* Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
* • Use append() to add one new guest to the end of your list.
* • Print a new set of invitation messages, one for each person in your list.
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