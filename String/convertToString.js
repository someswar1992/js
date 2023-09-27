// To Convert into String

let convertedValue = String(undefined)
console.log(typeof convertedValue);

console.log(String(true));

console.log(String(null));

console.log(String(1));

console.log(String([1, 2, 3, 3]))  // 1,2,3,3

console.log(String({ name: "Vivek" }))
// THIS IS NOT GOING TO CONVERT OBJECT = { } INTO STRING, Shows [object Object]


// To Convert Into String By toString() Method
let convert = 123
let convertedValueBy = convert.toString()
console.log(typeof convertedValueBy, convertedValueBy)
// THIS IS NOT GOING TO CONVERT undefined, null, Object = { } INTO STRING, Shows [object Object]

