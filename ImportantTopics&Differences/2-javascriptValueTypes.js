// JS is Loosly typed language (Dynamic) means we dont need to declare Data type of variable.
let variableName = "value";

// JS has two kinds of value - Primitive,Those are Number/String/Boolean/Null/undefined/symbol(ES6).

let a = 10;
console.log(typeof a)
let another = Infinity;
console.log(typeof another)
console.log(another)

// String Value can be represent by double quote or single
let s = "Vivek😊"
console.log(typeof s);

// Boolean value can - true or false
let booleanValue = true;
console.log(typeof booleanValue)
console.log(booleanValue);

// undefined and null - Thses are the values which represent the absense of value.
let u;
console.log(u)
console.log(typeof u);
// Undefined,means the variable has been declared, but its value has not been assigned.(accidental nothing)
let n = null;
console.log(n)
console.log(typeof n);
// The variable which has been assigned as null contains no value.(deliberate nothing) 

//👌When we are assigning primitive value, value is assigned not its reference.
let num;
num = a; // a value is Copied in num.
console.log(a, num);
a = 30;
console.log(a, num);


// Another kind of value - Non primitive,i.e Array/objects/functions.
let c = {};
let d = c; // c Reference(address) is copied
console.log(c, d)
c.name = "VivekKuShah";
console.log(c, d)

let obj = {};
let obj2 = {};
console.log(obj === obj2); // False, becuase both have different reference.

// One more example
let e = [];
let f = e; // e Reference(address) is copied
console.log(e, f)
e.push(10);
console.log(e, f)

let arr = [1];
let arr2 = [1];
console.log(arr === arr2) //false

// Real World Example
function incrementAge(age) {
    age = age + 1;
}
let myAge = 30;
incrementAge(myAge);
console.log(myAge);  // 30 Because The Value of myAge Var is primitive so when we pass it to a function we are actually passing the value of 30, Not Variable itself so it get copied by value not reference

function incrementAge(user) {
    user.age = user.age + 1
}
let me = { age: 30 };
incrementAge(me);
console.log(me); //31 We are passing object that is non primitive, so we pass it reference (so the actual me object is gone to function) so the age of me is manipulated.

// In functional programming this is known as Side Effect, That means a function effects a variable that not belongs it scope.

