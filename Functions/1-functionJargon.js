// Function Statement or Declaration
function declaration(){
    console.log("This is known as declartion");
}

// Function Expression
var expression = function(){
    console.log("This is the another way of creating function, A beautifull feature of a function is we can assign to a variable (function acts like a value)");
}

demo();
exp();
function demo(){
    console.log("difference b/w Function Statement and Function Expression")
}

var exp = function(){
    console.log("difference b/w Function Statement and Function Expression") 
}
/* What is difference B/w Function Statement and Function Expression?
Ans - The major difference b/w these two is Hoisting, What if i call demo function and exp even before creating it, During memory creation phase demo is created a memory and fun assign to it but in case of function expression this exp var is treated like any other variable it assigned undefined initially untill the code hits the line var exp = function(){}
*/

function (){
}
/* Anonymous Function - A function without name, it is similar to Function Statement But according to ECMA script specification a function statement should always have a name so this is Invalid syntax (syntax error).
So if we dont create like this than what is the use of it ? - Anonymous functions are used at place where functions are used as value. example like function expression
*/

// Named Function Expression - 
var a  = function example(){
    console.log("a is called")
}

a(); // Fine
example() //get an error, When we use this function as value, example is not created in the global scope But it is created as a local variable inside the function, so we can access inside the function.

function example(parameter1,parameter2){

}
example(argument1,argument2)
/* What is difference B/w parameters and arguments?
The value which we pass inside a function are known as args and labels/identifier which gets those value are known as parameter.
*/

// What is First Class function ? - The Ability to use function as value is known as first class function OR  ability of function to be used as value and can be passed as args to another functions and can be returned from the functions is this ability is known as first class functions in JS.
function firstClass(anonymousFunParameter,namedFunParameter){
    return function(){

    }
}
function anotherFunction(){

}
firstClass(function(){},anotherFunction)