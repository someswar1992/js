/* promise.all() - When we only want to run your code after all promises are fullfilled.
promise.all returns a single promise, this returned promise fulfills when all of the input's promises are fullfilled with an array of the fullfilled values. It rejects when any of the input's promise rejects.
*/

let products = fetch("https://fakestoreapi.com/products");
let users = fetch("https://reqres.in/api/users?page=2");
let promise = Promise.all([products, users])
    .then((response) => {
        console.log(response) //response is an array
        return Promise.all(response.map(res => {
            return res.json()
        }))
    })
    .then(([products, users]) => { //Des array
        console.log(products)
        console.log(users)
    })
    .catch((err) => {
        console.log(err);
    })

/* promise.allSetteled() -  returns a single Promise. This returned promise fulfills when all of the input's promises either fulfilled or rejected, with an array of objects that describe the outcome of each promise.
status -A string, either "fulfilled" or "rejected", indicating the eventual state of the promise.

value- Only present if status is "fulfilled". The value that the promise was fulfilled with.

reason- Only present if status is "rejected". The reason that the promise was rejected with.
*/

let rejPro = new Promise((resolve, reject) => {
    reject("Error")
})
let pro = fetch("https://fakestoreapi.com/products");
let usrs = fetch("https://reqres.in/api/users?page=2");
let proAllSet = Promise.allSettled([rejPro, pro, usrs])
    .then(res => {
        console.log(res)
        return Promise.all(res.filter((objects) => {
            return objects.status == "fulfilled";
        }).map((object) => {
            return object.value.json()
        }))
    })
    .then(([pro, usrs]) => {
        console.log(pro)
        console.log(usrs)
    })
    .catch(err => {
        console.log(err)
    })

// Promise.allSettled() is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other, or if you'd like to immediately reject upon any of them rejecting.