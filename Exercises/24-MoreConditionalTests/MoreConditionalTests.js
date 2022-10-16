/*
* More Conditional Tests: You don’t have to limit the number of tests you create to 10.
* If you want to try more comparisons, write more tests.
* Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array
* */

//Tests for equality and inequality with strings
let value = "Hello"
console.log("Is value == 'Hello', I predict true -> ", value == 'Hello')
console.log("Is value == 'Hello1', I predict false -> ", value == 'Hello1')
console.log("Is value != 'Hello1', I predict true -> ", value != 'Hello1')
console.log("Is value != 'Hello', I predict false -> ", value != 'Hello')


//Tests using the lower case function
value = "zero"
console.log("Is value == value.toLowerCase(), I predict true -> ", value == value.toLowerCase())
value = "Zero"
console.log("Is value == value.toLowerCase(), I predict false -> ", value == value.toLowerCase())


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
value = 2
console.log("Is value < 2? I predict false -> ", value < 2)
console.log("Is value <= 2? I predict true -> ", value <= 2)
console.log("Is value > 2? I predict false -> ", value > 2)
console.log("Is value >= 2? I predict true -> ", value >= 2)


//Tests using "and" and "or" operators
let a = 'a'
let b = 'b'
console.log("Is a === 'a' && b === 'b'? I predict true -> ", a === 'a' && b === 'b')
console.log("Is a == 'a' && b != 'b'? I predict false -> ", a == 'a' && b != 'b')
console.log("Is a === 'b' || b === 'b'? I predict true -> ", a === 'b' || b === 'b')
console.log("Is a === 'b' || b === 'a'? I predict false -> ", a === 'b' || b === 'a')


//Test whether an item is in an array
let array = [1, 2, 3]
console.log("Does array include 1? I predict true -> ", array.includes(1))
console.log("Does array include 4? I predict false -> ", array.includes(4))


//Test whether an item is not in an array
console.log("Does array not include 4? I predict true -> ", !array.includes(4))
console.log("Does array not include 3? I predict false -> ", !array.includes(3))
