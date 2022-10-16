/*
* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
*  Make sure you use each character combination, "\t" and "\n", at least once.
*  Print the name once, so the whitespace around the name is displayed.
*  Then print the name after striping the white spaces.*
*/


/*
* Written by: Abdul Hannan
* This program first prints the name with white space characters and then strips off those spaces
* */

var name = "\tJohn\n"

console.log("Before: ", name)
console.log("After: ", name.trim())