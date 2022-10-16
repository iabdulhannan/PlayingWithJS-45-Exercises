/*
* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
* You’ll have to think of someone else to invite.
*
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
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
