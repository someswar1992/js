// includes(string,position) - Determines string existence.if string present then its return true otherwise false.
let contain = "hello vivek kumar shah";
console.log(contain.includes("llo")); //true, If position not given then it looks from begining

console.log(contain.includes("llo",5)); //false

// The startsWith(searchString, position) method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
console.log(contain.startsWith("hello")) //true

console.log(contain.startsWith("hello",6)) //false

// The endsWith(searchString,endPosition) method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
console.log(contain.endsWith("hah",6)) 
