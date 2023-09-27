// Double Equality ( == ) -In JS used for comparing two variables,  but it ignores the Datatype of variable.
// not equal (!=)
let i = 5;
let j = "5";
console.log(i==j); //true

console.log("vivek" == ["vivek"]) //true, Because It inherently does type coercion. This means that before checking the values it converts the types of variable to match each other.

// strictEquality operator - ( === ) -In JS used for comparing two variables,  but this operator also checks the Datatype of variable.
// strict not equal (!==)
console.log("vivek" === ["vivek"]) //false