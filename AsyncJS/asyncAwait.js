/*When we use async keyword before a function then it returns by default a Promise Object.
    Promise Object
    {
        <state>: "fulfilled",
        <value>: undefined
    }
*/

async function exampleOne() { }
exampleOne()


/*As we know if we use async before a function and we are not returning anything, then what it returns,
IF WE RETURNS ANY VALUE THEN THIS FUNCTION AUTOMATICALLY WRAPPED THIS VALUE INSIDE THE PROMISE AND RETURNS A PROMISE
*/

async function exampleTwo() {
    return "VivekKumarShah"
}
const returnValue = exampleTwo()

console.log(returnValue) //Return a Promise, So How I get data from this Promise ?

returnValue.then(data => { console.log(data) })


/* What happend when we return a promise from a async function, Will this promise again wrapped into another promise and will return ?

NO,
IF RETURN VALUE IS ALREADY A PROMISE THEN IT WILL NOT WRAPPED INSIDE A PROMISE IT WILL BE RETURNED AS IT IS.
 */

async function exampleThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("createdPromise - Resolve Value - VivekKuShah")
        }, 5000)
    })
}
const promise = exampleThree()
// Once The exampleThree() is Executed It returns promise As it is Immediately.

promise.then(data => { console.log(data) })
// promise.THEN will Executed After the Promise Will Resolved


// AWAIT With ASYNC - Combo is used to handle Promise.

// WHY WE NEED ASYNC AWAIT ? WHAT IS THE DIFFERENCE B/W OLDER WAY OR THIS WAY

const promiseObj = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("createdPromise - Resolve Value - VivekKuShah")
    }, 5000)
})
function getData() {
    //AS SOON AS GETDATA() FUNCTION IS EXECUTED, JS ENGINE REGISTER THIS PROMISE AND IT WILL TAKE THIS CALLBACK FUNCTION AND KEEP IT SEPERATELY TILL IT IS RESOLVED. And IT WILL CONTINUE EXECUTING ANOTHER STATEMENT.                                                    *****JS ENGINE WILL NOT WAIT FOR PROMISE TO BE RESOLVED,
    promiseObj
        .then((data) => {
            console.log(data)
        })
    console.log("NORMAL JAVASCRIPT")
}
getData()

// ---------------WHAT HAPPEND IN ASYNC AWAIT-----------------

async function handlePromiseWithAsync() {
    // AS SOON AS HANDLEPROMISE() FUNCTION IS EXECUTED, JS ENGINE Will WAIT FOR PROMISE TO RESOLVED, AND ONCE THE PROMISE IS RESOLVED WHEATHER IT TAKES 10SECONDS OR 20SECONDS THEN  AFTER ONLY JS ENGINE WILL EXECUTE NEXT LINE CODE.                                  *****JS ENGINE WILL WAIT FOR PROMISE TO BE RESOLVED,(For More Depth Check Notes)
    console.log("BEFORE PROMISE")
    const data = await promiseObj;
    console.log(data)
    console.log("AFTER PROMISE RESOLVED")
}
handlePromiseWithAsync()


// // Will Sentence taught ---
// console.log("top")
// async function create() {
//     console.log("first in async fun")
//     const data = await fetch("https://fakestoreapi.com/products")
//     console.log(data)
// }
// create()
// console.log("bottom")

