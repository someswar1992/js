const numberCharacter = "aloha";
//getting index of character by indexOf("char",fromIndex)
//It will start search from the specified position or if the start position is not specified , it starts from the begining and till the end of string. */
console.log(numberCharacter.indexOf("a")); // it returns the index of first appearance of character in the string.
console.log(numberCharacter.indexOf("a",1)); 
console.log(numberCharacter.indexOf("q")); // if character is does't exist in string, we get -1
console.log(numberCharacter.indexOf("A")) // it is case sensitive so it returns -1 as A not in string.

// we ca also get at what index does substring begin
console.log(numberCharacter.indexOf("ha")); //3
console.log(numberCharacter.indexOf("lol")); // -1, substring "lol" not exist in string

// Search() - Similar to indexOf() without second Args, but it is more advanced because we can use RegEX.
let str = "Hello i'm Vivek, from singrauli";
let index = str.search("i");
console.log(index)
