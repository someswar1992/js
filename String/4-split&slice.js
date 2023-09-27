// split() - This method breaks the string up into seperate string according to a delimeter passed as its first args. The result is returned in an Array form.

// *****If args is not passed than it returns whole string in single Index.

let str = "Vivek Kumar Shah";
let returnSplit = str.split();
console.log(returnSplit)
let returnSplitWithargs = str.split(" "); //split by space, and returns array.length returns word count or length of array
console.log(returnSplitWithargs);

// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. 
let string = "Vivek kumar shah";
let result = string.slice(1, 5)
console.log(result)

let resultNegative = string.slice(-6, -2)
console.log(resultNegative)
