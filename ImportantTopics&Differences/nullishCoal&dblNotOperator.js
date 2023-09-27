// In JavaScript, Following values are considered as Falsy Values - false / 0/ ""(An empty string)/ null/ undefined/ NaN

// In JS OR (||) operator works on these falsy value, and gives default value.
let myVal = 0;
const myNumber = myVal || 10;
console.log(myNumber) //10

//But, The Nullish Coalescing operator (??) is JS operator that is used to provide default values for a variable that is only null or undefined.

let myValNullish = null;
const myNumberByNullish = myValNullish ?? 100
console.log(myNumberByNullish); // 100

// Double Not operator( !! ) - It converts Non-Boolean to a Boolean Value (truthy or falsy to Exact true or false boolean value);

let check = !!null
console.log(typeof check);
console.log(!!"")

