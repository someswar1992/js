// The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.

// callbackFn is invoked only for array indexes which have assigned values.
const arrMap = [10, 20, , 40, 50];
let results = arrMap.map((element, index) => {
    console.log("Visit", index)
    return element * 2;
})
console.log(results) // [20, 40, empty, 80, 100]


// The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array and Unlike map(), forEach() always returns undefined and is not chainable.
// callbackFn is invoked only for array indexes which have assigned values.
// Its also takes second args "this".

const arrForEach = [100, 200, 300, 400, , 600]
arrForEach.forEach((element, index) => {
    console.log("Visit", index)
})