let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise after 3 sec")
    },3000)  
})

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("promise 2 after 1-sec")
        reject(new Error("Some thing wrong"))
    },1000)  
})

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise 3 after 2-sec")
    },2000)  
})

//Promise.race() - returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.
let promise = Promise.race([promise1,promise2,promise3]);
promise.then((data)=>{
    console.log(data)
})

/*Promise.any() - do the same as race but here is some difference in case of rejection 
in case of race either the first promise(sortest time taking) is fullfiled or rejects it takes that only.
but in case of any if first promise rejects than it waits for second promise that fullfiled, It rejects when all of the input's promises reject, with an AggregateError containing an array of rejection reasons. */
let promiseAny = Promise.any([promise1,promise2,promise3]);
promiseAny.then((data)=>{
    console.log(data)
})