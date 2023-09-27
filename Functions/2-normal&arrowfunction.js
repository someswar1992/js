// normal Function - If we do not return anything from a function than function by default always returns "undefined" and If the function have return, return should not have a line break. if the line break than these are two seperate statements. 
function normalReturn() {
    return //Js will do like return;
    {
        msg: "hi";
    }
}
console.log(normalReturn());

// default parameter value -
function normal(parameter1, parameter2 = "defaultValue") {
    return "return statement"
}

normal(args1, args2, fakeArgs3) // Extra args JS will ignore, not generate any error

// arguments object - The arguments object is a local variable available within all non-arrow functions. we can refer to a function's arguments inside that function by using its arguments object. It has entries for each argument the function was called with, with the first entry's index at 0.
//arguments is an array-like object, which means that arguments has a length property and properties indexed from zero, but it doesn't have Array's built-in methods like forEach() or map(). However, it can be converted to a real Array, using one of slice(), Array.from(), or spread syntax.
function argsobject(){
    console.log(arguments)
    console.log(arguments[0])

    // converting into an array
    let array = [...arguments];
    console.log(array)
}
argsobject(10,2,3,4)
// we can use arguments.length to count how many arguments the function was called with. If you instead want to count how many parameters a function is declared to accept, inspect that function's length property.

// FAT arrow function  - An arrow function expression is a compact alternative to traditional function expression.

const arrow = (parameter1, parameter2 = "defaultValue") => {
    return "return statement"
}
arrow(args1, args2);

// 1- Arrow function comes with default return keyword if we have single line as a function body than no need to mention return keyword explicitly.
const returnDefault = () => "Hello I'm returned by default";
console.log(returnDefault());

const returnDefaultFormats = () => ("Hello I'm returned by default");
console.log(returnDefaultFormats());

// 2-  Special Case - let suppose we have to return an object, than JS engine think { } as a function block so we have to wrap with ()
const specialReturn = () => ({ name: "VivekKuShah" });

// 3- If in arrow function, we have only single param
const singleParam = name => `Hello! my name is ${name}`;
console.log(singleParam());