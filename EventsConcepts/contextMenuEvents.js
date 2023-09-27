//The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.
document.addEventListener("contextmenu",function (eventObject){
    eventObject.preventDefault() //prevent Default behaviour
    alert("not allow to do !") 
})

let combination = ["c","C","v","V"]
document.addEventListener("keydown", function (e){
    // keyDown is nesessary, keypress not support ctrl,shift etc and keyup is not working because when we press ctrl that time e.ctrl is true but at the time of leaving becomes false.
    if(e.ctrlKey && combination.includes(e.key) || e.key === "F12"){
        e.preventDefault();
        alert("not allow to do !") 
    }
})