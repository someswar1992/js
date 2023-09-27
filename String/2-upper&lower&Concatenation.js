// toUpperCase() and lowerCase()
let string = "vivEk"
let returnToUpperCase = string.toUpperCase()
console.log(returnToUpperCase)

let returnToLowerCase = string.toLowerCase()
console.log(returnToLowerCase)

//String Concatenations
let firstName = "Vivek";
let lastName = "Shah ";
// by (+)operator
let concate = firstName + " " + lastName + "I'm Computer Science Engineer";
console.log(concate)
// Issue is for space we have to do.

let con = `${firstName} ${lastName} and I'm Computer Science Engineer`;
console.log(con);

// By method - str.concat() methods acceps any number of arguments and returns the string obtained by concatenating the args to the string on which it was invoked.
let newString = firstName.concat(" ", lastName, " ", "I'm Computer Science Engineer");
console.log(newString)



