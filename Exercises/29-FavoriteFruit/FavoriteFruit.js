/*
* Favorite Fruit: Make an array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make an array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
* If the fruit is in your array, the if block should print a statement, such as You really like bananas!
* */


var favorite_fruits = ['banana', 'guava', 'peach']

if (favorite_fruits.includes('apple')) {
  console.log('Your really like apples')
}
if (favorite_fruits.includes('banana')) {
  console.log('Your really like bananas')
}
if (favorite_fruits.includes('peach')) {
  console.log('Your really like peaches')
}
if (favorite_fruits.includes('mango')) {
  console.log('Your really like mangoes')
}
if (favorite_fruits.includes('guava')) {
  console.log('Your really like guavas')
}