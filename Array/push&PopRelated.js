// push() - Push adds one or more elements to the end of an array and it returns the new length. 
// unshift() - same as a push but it add elemenents at begining.
const arr = [10, 20, 30, 40];
let returnPush = arr.push(50, 60);
console.log(arr);
console.log(returnPush)

let returnUnshift = arr.unshift(1, 2, 3)
console.log(arr);
console.log(returnUnshift)

// pop() - Removes an elemenent from the end of an array and return that item.
// shift() - same as a pop but it removes elemenents at begining.
const popArr = [10, 20, 30, 40, 50];
let returnPop = popArr.pop()
console.log(popArr);
console.log(returnPop);

let returnShift = popArr.shift();
console.log(popArr);
console.log(returnShift);