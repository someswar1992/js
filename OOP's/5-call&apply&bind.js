// Explicit Binding - 

// Call(object,fuctionArgs) 
const object = {
    fullname : "VivekKumarShah",
    mobile : 6260264382,
    email : "vivekkushah@gmail.com"
}
function callDemo(branch,year){
    console.log(`Name - ${this.fullname}, Mobile number ${this.mobile} & my Mail ${this.email}`)

    // with args
    console.log(`Branch -${branch} and ${year} passout `)    
}
//CallDemo(); - Generally 'this' points Global Object - Window, If we want to 'this' points our current object so we use call().
callDemo.call(object)
// If we also want to pass args than we can pass like

callDemo.call(object,"ComputerScience",2014)


// Note: This function is almost identical to apply(), except that call() accepts an argument list, while apply() accepts a single array of arguments — for example, func.apply(this, ['eat', 'bananas']) vs. func.call(this, 'eat', 'bananas').

// apply(this,functionArgs)
callDemo.apply(object,["ComputerScienceEngg",2014])
// Here we must to know this is equivalent to 
callDemo.apply(object,...["ComputerScienceEngg",2014]) //spread


// Bind () - Instead of calling these function right over here just like call() and apply () do, It returns a another function which we can call letter.(Function Which we are calling by Bind() same function is returned in which this point current object).
let returnBind = callDemo.bind(object,"ComputerScienceEngg",2014);
console.log(returnBind)
returnBind()

//*Simplest use of bind() is to make a function with pre-specified initial arguments.
function list(...args) {
    return args;
  }
  console.log(list(1, 2, 3));

// Create a function with a preset leading argument
const leading = list.bind(null, 37);
console.log(leading()); //[37]

console.log(leading(1,2,3)); //[37, 1, 2, 3]
console.log(leading()); //37
