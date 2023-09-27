//trim() - It Removing white space from both ends of string. If we want to remove perticular side trimStart() and trimEnd();
let fullname = "  vivek shah  "
let trim = fullname.trim();
console.log(trim)

let trimStart = fullname.trimStart();
console.log(trimStart)

let trimEnd = fullname.trimEnd()
console.log(trimEnd)

// padding() - 
let fname = "VIVEK";
let padStart = fname.padStart(5)
console.log(padStart)
// Given first args including padding+str length, if we are not providing anything than it adds space
console.log(fname.padStart(8)) //   vivek 
console.log(fname.padStart(8,"*")) // ***VIVEK
console.log(fname.padStart(8,"12345")) //123VIVEK
console.log(fname.padStart(8,"12"))  // 121VIVEK // if less than then its wrap it

console.log(fname.padEnd(8,"12345")) // VIVEK123

