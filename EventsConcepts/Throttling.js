function withoutThrottle(){
    console.log("clicked Me")
}

function throttling(fun,delay){
    let flag = true
    return function(){
         if(flag){
            fun()
            flag = false;
            setTimeout(()=>{
                flag = true
            },delay)
         }
    }
}

const withThrottle = throttling(withoutThrottle,2000)