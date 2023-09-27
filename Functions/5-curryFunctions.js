// Currying is the process of taking function with multiple arguments and turning it into a sequence of functions each with only a single argument.

// General
const multiply = (x,y) => {
    return x*y
}
const result = multiply(2,3);
console.log(result);

// Curried Function
const curriedMultiply = x => {
    return y => {
        return x*y;
    }
}
const curriedResult = curriedMultiply(2);
console.log(curriedResult); //Any Time I can call
const curriedResultFinal = curriedResult(3);
console.log(curriedResultFinal);
// OR
const curriedResultSepratePara = curriedMultiply(2)(3)
console.log(curriedResultSepratePara);

function add(a){
    return function(b){
        return function(){
            return a+b;
        }
    }
}
console.log(add(5)(5)())

// Infinite currying 
function add(a){
    return function(b){
        if(b)
        return add(a+b)
        return a;
    }
}
console.log(add(5)(5)(5)(5)(5)())

// extra imp - If can't understand then first see bind(),function with pre-specified initial arguments.
const curry = (fun) =>{
    console.log(fun.length) // Gives the total number of args
    return curried = (...args)=>{
        console.log(fun.length)
        // console.log(args)
        // console.log(args.length)
        if(fun.length !== args.length){
            console.log(args)
            debugger
            return curried.bind(null,...args)
        }
        return fun(...args)
    }
}
const total = (x,y,z) => x+y+z;
let curriedFun = curry(total)
curriedFun(10)(20)(30) //30