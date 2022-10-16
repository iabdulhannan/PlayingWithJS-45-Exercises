const show_magicians = (magicians) => {

  for (const magician of magicians) {
    console.log(magician)
  }
}

let magicians = ['Zero', 'Harvey Spectre', 'Mike Ross']

const make_great = (magicians) => {

  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = 'Great ' + magicians[i]
  }

}

make_great(magicians)
show_magicians(magicians)