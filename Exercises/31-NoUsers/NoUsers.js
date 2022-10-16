/*
* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all the usernames from your array, and make sure the correct message is printed.
* */


let usernames = ['zero', 'stranger', 'guest', 'admin', 'user']
greet(usernames)

console.log('Emptying array and greeting again')
usernames = []
greet(usernames)

function greet(usernames) {

  if (usernames.length) {
    for (const username of usernames) {

      if (username === 'admin') {
        console.log(`Hello ${username}, would you like to see what's new today??`)
      } else {
        console.log(`Hello ${username}, thank you for logging in again`)
      }
    }
  } else {
    console.log('We need to find some users!')
  }
}
