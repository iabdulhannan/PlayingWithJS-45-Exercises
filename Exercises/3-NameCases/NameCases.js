/*
* Written By: Abdul Hannan
* This program prints an input string in, Upper Case, Lower Case and Title Case
* */

let name = "ZERO ONE"

console.log("UPPERCASE: ", name.toUpperCase())
console.log("lowercase: ", name.toLowerCase())


function toTitleCase(name) {
    let array = name.toLowerCase().split(" ");
    let titleCasedName = "";

    for (let i = 0; i < array.length; i++) {
        titleCasedName += array[i][0].toUpperCase() + array[i].slice(1) + " ";
    }
    return titleCasedName;
}

console.log("Title Case: ", toTitleCase(name))