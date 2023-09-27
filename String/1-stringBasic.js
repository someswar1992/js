// JavaScript String 
const string = "Hello";
console.log(typeof string) //string
console.log(string.length); // 5

const spaceStr = " "; // Space itself is a character.
console.log(spaceStr.length); // 1

const empStr = ""; // empty string
console.log(empStr.length); // 0
console.log(typeof empStr); // string

// (\) this is used for wrinting sorthand in string.
let stringModernWay = 'Vivek You\'ve selected in AMD BARC'
console.log(stringModernWay);
// Or another way of writing 
let modernStr = "Vivek you've selected";

// Characters are in a specific order each gets a number(indexing), starting at 0.
const numberCharacter = "aloha";
console.log(numberCharacter[0]) // a 
//OR we can use charAt() - It Returns the character at the specified index in the string.
let returnCharAt = numberCharacter.charAt(0);
console.log(returnCharAt)





