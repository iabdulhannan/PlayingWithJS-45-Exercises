const makeCar = (manufacturer, modelName, ...args) => {

  let car = {
    manufacturer: manufacturer,
    model: modelName
  }

  if (args.length) {
    for (let i = 0; i < args.length; i++) {
      car[Object.keys(args[i])] = args[i][Object.keys(args[i])]
    }
  }

  return car
}


console.log(makeCar('Honda', 'Civic'))
console.log(makeCar('Honda', 'Civic', {color: 'Matt Black'}, {lights: 'neon'}))
console.log(makeCar('Mercedes', 'Benz', {class: 'S'}))