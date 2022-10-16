const makeSandwich = (...items) => {


  console.log("The order Sandwich would have the following items: ")
  for (const item of items) {
    console.log(item)
  }
}

makeSandwich('Tuna', 'Mayo')
makeSandwich('Tuna', 'Mayo', 'Jalapenos')
makeSandwich('Tuna', 'Mayo', 'Jalapenos', 'Olives')