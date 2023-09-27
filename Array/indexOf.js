/* indexOf(searchElement,fromIndex) - This method allows to easily find the occurence of an item in an array, If the item not found It Returns -1.
- The search will start at the specified position or at the begining if the start position is not specified till the end of array. */

// useCase removing duplicate valus, also mostly asked interview Question
let arr = [4, 2, 5, 1, 6, 5, 8];
let length = arr.length;
let arrDistinct = [];
for (let i = 0; i < length; i++) {
    if (arrDistinct.indexOf(arr[i]) === -1) {
        arrDistinct.push(arr[i]);
    }
}
console.log(arrDistinct)

// If the duplicate values are sorted
let a = [1, 2, 5, 2, 1, 8];
let l = a.length;
let bDistinct = []
a.sort();
console.log(a) //[1, 1, 2, 2, 5, 8] Than how to remove duplicate
let temp;
for (let i = 0; i < l; i++) {
    if (a[i] !== temp) {
        temp = a[i];
        bDistinct[i] = temp;
    }
}

// using Object we can also, as we know object key's can't be duplicate
let array = [1, 2, 5, 2, 1, 8];
let obj = {}
for (const value of array) {
    obj[value] = true
}
console.log(obj)
// By using object.key() method we can get array of keys