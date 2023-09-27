// The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.
let word = "Helloe";
let replace = word.replace("e","Vivek");
console.log(replace)

let replaceall = word.replaceAll("e","Vivek");
console.log(replaceall)