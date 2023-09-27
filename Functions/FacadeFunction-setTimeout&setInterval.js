// setTimeout(callBackFunction,timeInMilisecond)-
let timerId  = setTimeout(function(){
    console.log("Hello I'm setTimeout after 5 Sec")
}, 5000);
console.log(timerId);

// We can stop setTimeout() function by using timerId
clearTimeout(timerId) 

// Another Format
function add(a,b,c){
    console.log(a+b+c)
}
let id = setTimeout(add,2000, 10,20,30)
console.log(id);
clearTimeout(id);

// setInterval(callBackFunction,timeInMilisecond)
let timerIdInterval = setInterval(function (){
    console.log("Hello I'm setInterval after 5 Sec")
},3000)
console.log(timerIdInterval)

// Interview Question Most asked output ?- Based On Var scope and Closure  

for (var i = 0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    },5000)
}
console.log("end");
// We aspect  the output like - 0,1,2,3,4 but output is end than Five times 5, Because var have a global scope and callbacks are referring the i, as we know JS is synchronous single threaded language, It does not wait for any thing it executes loop,end statement and callbacks those are pushed into webApi during loop execution waiting for callstack, when it find callstack empty get executed that time i = 5 so we get this output.
// If not understand Watch Event Loop video namaste javascript.

// making changes to get desired output
for (var i = 0; i<5; i++){
    function creatingClosure(i){
    setTimeout(function(){
        console.log(i);
    },5000)
    }
    creatingClosure(i)
}


