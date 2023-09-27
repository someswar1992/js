let grandParent = document.getElementById("grandParent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");

// Event Bubbling: Event is travelling from inner most element to outer most element.
grandParent.addEventListener("click",function(){
    console.log("grandParent")
});
parent.addEventListener("click",function(){
    console.log("parent")
});
child.addEventListener("click",function(){
    console.log("Child")
})

let grandParentCap = document.getElementById("grandParent-cap");
let parentCap = document.getElementById("parent-cap");
let childCap = document.getElementById("child-cap");

// Event Capturing/Trickling: Event is travelling from outer most element to inner most element, addEventListener takes third args, that is by default false if we make true then it works as Capturing. 
grandParentCap.addEventListener("click",function(){
    console.log("grandParentCap")
},{capture :true});
parentCap.addEventListener("click",function(){
    console.log("parentCap")
},{capture :true});
childCap.addEventListener("click",function(){
    console.log("childCap")
},{capture :true});

/*
 First The event propogation happens top-down the hierarchy means Capturing happens than Bubbling out happens and the callback methods are called according to the parameters what we passed as true or false.

*/
let grandParentM = document.getElementById("grandParent-mix");
let parentM = document.getElementById("parent-mix");
let childM = document.getElementById("child-mix");
grandParentM.addEventListener("click",function(){
    console.log("grandParent")
},{capture :true});
parentM.addEventListener("click",function(){
    console.log("parent")
});
childM.addEventListener("click",function(){
    console.log("Child")
},{capture :true});



// By using the stopPropagation method on the event object we are able to stop the event from continuing its capturing and bubbling which means if there are any other event listeners in the chain that would fire they do not.

let grandParentStope = document.getElementById("grandParent-m");
let parentStope = document.getElementById("parent-m");
let childStope = document.getElementById("child-m");
grandParentStope.addEventListener("click",function(){
    console.log("grandParent")
},{capture :true});
parentStope.addEventListener("click",function(e){
    console.log("parent")
    e.stopPropagation()
},{capture :true});
childStope.addEventListener("click",function(){
    console.log("Child")
},);


