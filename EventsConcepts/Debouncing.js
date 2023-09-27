var count = 1;
function getDataDemo(){
    console.log(count++)
}
// This function is called after every key stroke.

// Implementing Debouncing Concept
function debounceFunction(functionPara,delay){
    let timeoutID;
    return function(){
        if(timeoutID)
        clearTimeout(timeoutID)
        timeoutID = setTimeout(()=>{
            functionPara()
        },delay)
    }
}
const betterFunction= debounceFunction(getDataDemo,1000)

// Debouncing - If the difference b/w two keystroke events is certain time then only make a function call.