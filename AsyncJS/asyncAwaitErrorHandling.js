
/* Handling Errors - With try Catch

Fetch With Async await,Fetch does not throw error for NON 200 HTTP status, user have raw response that could be a 401,400 a 404

if (!res.ok) {
    throw new Error("Bad Response")
}

But there could be many different error could be unthorised it could just be an internal server error, When we handle this error, we dont get any other information what was the status/body ?

*/
async function handlingErrorWithawait() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/Error");
        console.log(res)
        if (!res.ok) {
            throw new Error("Bad Response", {
                cause: { res }
            })
        }
    } catch (error) {
        console.log(error.name) //Type of Error
        console.log(error.message) //Error Message
        console.log(error.cause) //We can See cause Object
        console.log(error.cause.res)
        switch (error.cause.res.status) {
            case 400: console.log(error.cause.res.status)
                break
            case 404: console.log(error.cause.res.status)
                break
        }
    }
}
handlingErrorWithawait()