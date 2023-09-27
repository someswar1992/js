// some() - This method checks is atleast one of the array item passed the given condition or not, If passed than it returns TRUE other wise False.

const arr = [10, 5, 30, 100, 0];
let returnSome = arr.some((element) => {
    return element > 30
})
console.log(returnSome);

// every(); - This method checks is every element of array item passed the given condition or not, If passed than it returns TRUE other wise False.

const arrEvery = [10, 5, 30, 100, 6];
let returnEvery = arrEvery.every((element) => {
    return element >= 5
})
console.log(returnEvery);