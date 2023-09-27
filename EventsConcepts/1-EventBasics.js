let div = document.getElementById("root");

/* The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target. 
addEventListener(type, listener, options)*/
div.addEventListener("dblclick", function handle(){
    console.log("dbl clicked")
});

/* It is also important to note that if you have multiple event listeners on an element for the same event they will all fire in the order they were added to the element. */
div.addEventListener("click", function(){
    console.log("Click 1 event Called");
})
div.addEventListener("click", function(){
    console.log("Click 2 event Called");
})

/* options(Optional)
An object that specifies characteristics about the event listener. The available options are: 
1-once
A boolean value indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked. If not specified, defaults to false.  
*/

// 