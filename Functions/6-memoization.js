// Memoization an optimization technique that increases performance by caching results of function calls. this reduces execution time and increases CPU performance.

// It does this by storing computation results in cache and retrieving that same information from the cache the next time it's needed instead of computing it again.

function add(x){
    return x+10;
}

function memoization(fun){
    let cache ={};
    return function inner(x){
        if(cache[x] in cache){
            console.log("second time when we called");
            console.log(cache)
            return cache[x];
        }
        else{
            console.log("first time when called");
            let result = fun(x);
            cache[x] = result;
            console.log(cache)
            return result;
        }
    }
}

let calculate = memoization(add);
calculate(10);
calculate(10);