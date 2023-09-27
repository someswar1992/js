// slice(startPoint,EndPoint-1) - It Does Not Modify Original Array.
const arr = ["vivek", "manoj", "indra", "vikas"];
let returnSlice = arr.slice(1, 3);
console.log(returnSlice)

// IF in the slice(StartPoint) is only given 
let returnStartPoint = arr.slice(1);
console.log(returnStartPoint);

// If negative values are given, but startpoint must be left to right like slice(-3,-1)
const arrNegative = ["vivek(-4)", "manoj(-3)", "indra(-2)", "vikas(-1)"];
let sliceNeg = arrNegative.slice(-3,-1) // (-1,-3) it not works in right to left
console.log(sliceNeg)

// splice(StartValue,CountValueFromStartValue(Deleted),NewValue) - It Modifies Original Array
const users = ["RamKripal", "RamRati", "IndraKu", "VikasKu", "VivekKu", "ManojKu"];
let returnSplice = users.splice(2, 2, "MUNNA");
console.log(users);
