let keyDown = document.getElementById("keyDown");
let keyUp = document.getElementById("keyUp");
let keyPress = document.getElementById("keyPress");

keyDown.addEventListener("keydown", (e)=>{
    alert("Fired, Before taking Value",e.target.value)
})

keyUp.addEventListener("keyup", (e)=>{
    alert("Fired, After taking Value",e.target.value)
})

keyPress.addEventListener("keypress", (e)=>{
    alert("Same as KeyDown",e.target.value)
})
/* The keypress event is fired when a key that produces a character value is pressed down.
Examples of keys that produce a character value are alphabetic, numeric, and punctuation keys.
Examples of keys that don't produce a character value are modifier keys such as Alt, Shift, Ctrl, or esc.
*/