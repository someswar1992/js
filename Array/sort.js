//The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

let number = [2, 5, 100, 4]
let sortednumber = number.sort()
console.log(sortednumber) //[100, 2, 4, 5]
// Why ?
number.forEach((number) => {
    console.log(number, " ", String(number).charCodeAt(0));
})
/*
100 ' '49
2 ' ' 50
4 ' ' 52
5 ' ' 53
*/

//array.sort(compareFn)
let sort = number.sort((a, b) => {
    if (a < b) return -1 // "a" comes before "b"
    else if (a > b) return 1 // "b" comes before "a"
    else return 0 //nothing to change
})
console.log(sort)

// another way of writing compareFn
let sortestWay = number.sort((a, b) => {
    return a - b;
})
console.log(sortestWay)

// sorting string
let arrString = ["indra", "vikas", "vivek", "manoj"];
arrString.sort((a, b) => {
    return (a > b) - (a < b)
})
console.log(arrString)
