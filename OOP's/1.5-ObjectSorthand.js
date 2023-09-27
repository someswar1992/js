function objectSorthandExample(x,y){
    return {
        x:x,
        y:y
    }
}
const Op = objectSorthandExample(10,20);
console.log(Op)
/* ES6 provides the syntactic sugar to eliminate the redundency of having to write x:x,
we can simply write x once and it will be converted into x:x(or something equivalent). */
function objectConciseway(x,y){
    return { x, y}
}
const Output = objectConciseway(10,50)
console.log(Output)

// This is another example
const fullName = "VivekKumarShah";
const branch = "CSE";
const newObject ={fullName:fullName,branch:branch}
console.log(newObject);
// OR
const or = { fullName, branch };
console.log(or);