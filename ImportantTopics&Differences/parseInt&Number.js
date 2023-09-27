let number = "10";
console.log(typeof number) // string
console.log(Number(number)); // 10
console.log(parseInt(number)); // 10

// Bothe are the giving Same Output, But the diffrenece is 

let diffNumber = "10abc"
console.log(Number(diffNumber)); //NaN
// Number always check the total input value like a number or not ? Here not so output is NaN

console.log(parseInt(diffNumber)) // 10
// parseInt works on index by index at first index digit or character if digit keep it, whenever it finds a character just ignore all remaining values.

let demo = "abc"
console.log(parseInt(demo)); //NaN 

// Another Sortcut is use (+)
let num = "10ab";
console.log(+num) //nan

let n = "10"
console.log(+n)


