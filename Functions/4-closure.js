// Scope - Where to look for things. OR The rules of what data is available to me at any given line in my running of my code.

// Lexical means the position of my function definition, not where its gets invoked, is ultimately what determines what data i will have available to me when my function does get invoked.

// Global Scope
function outer(){
    // Outer Function Scope 
    function inner(){
        // Local Scope
    }
}

// Closure - Closure is When a *FUNCTION "remebers" its lexical scope even when the function is executed outside the lexical scope. OR Closure is the capability for a function to remember and access its lexical scope even when the function is executing outside of it's lexical scope.

function outer(){
    let counter = 0;
    function increment(){
        counter++;
        console.log(counter);  
    }
    return increment;   
}
let newFunction = outer();
newFunction();
newFunction();
let anotherFunction = outer();
anotherFunction();
anotherFunction();
anotherFunction();

// * Closure Real World Example

// First See Problem
let count = 0
function countIncrement(){
    count++
}
countIncrement()
countIncrement()
// count = 5 Problem
console.log(count)
// Problem - Here Count is global variable,It may be possibile In Real Time we accidently assign any value to Count than it gives wrong value. 

// Try to Solve - we try to place count inside function
function countIncrement(){
    let count = 0;
    count ++;
    console.log(count)
}
countIncrement()
countIncrement()
// Next Problem - When Call the function count will increase but when we again call the count first it is reset to 0 as expected output we will not get.

// Solution - By Closure 

function countWrapper(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
}
let updateCount = countWrapper()
updateCount()
updateCount()
updateCount()
// Here Our Count Variable Become Private No one can access From Outside

// Making Cart -
function cart(){
    let item = 0;
    function updateItem(val){
        item += val
    }
    return {
        increment(){
            updateItem(1)
        },
        decrement(){
            updateItem(-1)
        },
        value(){
            return item;
        }
    }
}
cartCounter = cart();
cartCounter.increment();
cartCounter.increment()
cartCounter.value()
cartCounter.decrement()
cartCounter.value()


// Creating React useState
function useState(initialValue){
    let state = initialValue;
    function setState(value){
        state = value
    }
    function getState(){
        return state;
    }
    return [getState,setState]
}
function component(){
    const [getCount,setCount]= useState(0)
    return {
        click(){
            setCount(5)
        },
        render(){
            console.log(`Value ${getCount()}`)
        }
    }
}
const counter = component();
counter.click()
counter.render()


let demoCount = 0;
function inner(value){
    console.log(value)
}
function Outer(){
    return function()
}