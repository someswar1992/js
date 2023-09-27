// const - const does not mean immutability, it means cannot reasign.
const a = 10;
a=20;
console.log(a) // Getting an Error Assignment to constant variable.

// Primitives are Immutability In JavaScript,primitives means just a value.
let b = 5;
//Take this 5 It can't be something else, we can not change 5 to something else it will always be a number 5
let str = "vivek";
str[0] = "S";
console.log(str);

// Non-primitives are mutable,we can change the content.
const arr = [10,20,30];
arr.push(40);
console.log(arr);

const obj = {
    name:"VivekKuShah"
}
obj.mobile = 6260264382;
console.log(obj);


