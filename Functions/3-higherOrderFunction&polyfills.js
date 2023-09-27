// A function that takes another function as a args known Higher order function.
// and function that we pass known as callback function.
function outer(instruction){
    console.log("I'm Higher Order Function")
    instruction()
}
function inner(){
    console.log("I'm Callback Function")
}
outer(inner);

// Using Higher order functions we trying to create polyfills  - map()
Array.prototype.myMap = function(callbackFunction){
    const object = this;
    console.log(this)
    const newArray = []
    for(let i=0; i<this.length; i++){
        newArray.push(callbackFunction(this[i],i,this))
    }
    return newArray;
}
const arr = [10,20,30];
let result = arr.myMap(function callback(item,index,arr){
    return item*2
})
console.log(result);

// reduce() 
const arrReduce = [10,20,30];
Array.prototype.myReduce = function(callbackFunction,initialValue){
    let acc = initialValue;
    for(let i=0; i<this.length; i++){
        acc = acc ? callbackFunction(acc,this[i],i,this) : this[i]
    }
    return acc;
}
const res = arrReduce.myReduce(function callback(acc,currentValue,i,arr){
    return acc+currentValue
})  // 1 -Here we are not passing any initial value, so initialValue becomes undefined
console.log(res)

// filter()
const arrFilter = [10,20,30];
Array.prototype.myFilter = function(callbackFunction){
    const newArray = [];
    for(let i=0; i<this.length; i++){
        if(callbackFunction(this[i],i,this))
        newArray.push(this[i])
    }
    return newArray;
}
const resFilter = arrFilter.myFilter(function callback(item,index,arr){
    return item>10
})
console.log(resFilter)