// spread(...) - unpacks the elements [],{}

// uses of spread - copy as well append and for merger
let arr = [1, 2, 3];
console.log(...[1,2,3]) // 1 2 3

let newArr = [0, ...arr, 4];
console.log(newArr);

let arr2 = [4, 5, 6];
let mergeArr = [0, ...arr, ...arr2, 7];
console.log(mergeArr);

let obj = { name: "Vivekkushah", branch: "Computerscience" };
let newObj = { id: "co4", ...obj, age: 30 }
console.log(newObj)

let obj2 = { email: "vivekkushah@gmail.com", mobile: "jio" };
let mergeObj = { id: "co4", ...obj, age: 30, ...obj2, }
console.log(mergeObj)
// *** In case object at the time of spreading if we define same key:"newValue" than it will replaces old key value.

let str = "VivekKuShah";
let strArr = [...str];
console.log(strArr);

// shallow Copy  - spread operator creates a shallow copy means, if any of the field of object are references to other objects (nested behaviour), than just the reference is copied.
let array = [10, 20, [30, 40], { name: "Vivek" }];
let shallowCopy = [...array];
console.log(shallowCopy)

array[2].push(50);
array[3].branch = "cse";
console.log(array);
console.log(shallowCopy)

let object = { name: "Vivek", code: ["C04"], add: { place: "nigahi" } };
let shallowObject = { ...object };
console.log(shallowObject)

object.code[1] = "059";
object.add.state = "mp";
console.log(object)
console.log(shallowObject);

/* rest(...) - packs the elements in array, It allows a function to accepts an indefinite number of arguments as an array. 
- We can also define how many args store in normal parameters and remaining in rest but condition is rest operator should be last param. 
- Before ES6 we are use arguments objects.*/

function rest(firstname, lastname, ...rest) {
    console.log(rest);
    console.log(Array.isArray(rest)); //Returns true, 
    // we can apply all array methods on rest
}
rest("Vivek", "Shah", "cse", "engineer", 6260264382);