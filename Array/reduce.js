// The Reduce method, Reduces an arrays of values down to just One Value.
const number = [2, 4, 6, 8, 0];
let returnValue = number.reduce((accumlator, element, index) => {
    return accumlator += element
}, 0)
console.log(returnValue)

// The Accumlator is basically the result of previous computation, at first time no computation so this going to be 0 that is initial value given by us.If there is no initial value provided by us than it takes first element of array as a value of accumlator.