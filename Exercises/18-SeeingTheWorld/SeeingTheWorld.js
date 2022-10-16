/*
* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
* */

let places = ['London', 'Paris', 'New York', 'Bora Bora', 'Rome']

console.log("Original: ", places)
console.log("In Alphabetical Order: ", sortItOut(places))
console.log("Original: ", places)
console.log("In Reverse Alphabetical Order: ", sortItOut(places, 'reverse'))
console.log("Original: ", places)
console.log("Reversed Original Array: ", places.reverse())
console.log("Double Reversed Original Array: ", places.reverse())
console.log("Original Array in Alphabetical Order: ", sortItOut(places, '', true))
console.log("Original Array in Reverse Alphabetical Order: ", sortItOut(places, 'reverse', true))


function sortItOut(places, type, modifyOriginal = false) {

  var placesArray = modifyOriginal ? places : places.slice(0)

  for (let i = 0; i < placesArray.length; i++) {
    for (let j = 0; j < (placesArray.length - i - 1); j++) {

      if (type === 'reverse') {
        if (placesArray[j] < placesArray[j + 1]) {
          let temp = placesArray[j]
          placesArray[j] = placesArray[j + 1]
          placesArray[j + 1] = temp
        }

      } else {
        if (placesArray[j] > placesArray[j + 1]) {
          let temp = placesArray[j]
          placesArray[j] = placesArray[j + 1]
          placesArray[j + 1] = temp
        }
      }
    }
  }
  return placesArray
}