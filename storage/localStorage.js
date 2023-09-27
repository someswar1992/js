/* Web Storage Objects -

Local or Session storage allow to save key:value pairs in the browser.
- Both storage objects provide the same methods and properties
setItem("key",value); - Stores key:value
getItem("key"); - get the value by key 
removeItem("key"); - removes the key with its value.
clear() - deletes everything
key(Index) - get the key on a given position
length -the number of stored items.

- Both key and value must be strings, If they were any other type like number or an object they would get converted to a string automatically.

local storage - shared between all tabs and windows from the same origin.
The data does not expired, It remains after the browser restart and even OS reboot.
*/
localStorage.setItem("name", "VivekKuShah")
localStorage.setItem("rollNumber",59) 

localStorage.getItem("name") 
localStorage.getItem("rollNumber")

localStorage.setItem("demo","data")
localStorage.removeItem("demo") // - removes item from local storage

localStorage.length; //2

// TO STORE Objects - 
localStorage.setItem("demoObject",{a:10})
alert(localStorage.getItem("demoObject")) //[object Object]

localStorage.setItem("user", JSON.stringify({name:"VivekKuShah"}))
localStorage.getItem("user") //{"name":"VivekKuShah"}
//To get in Object Format(debugging purpose)
JSON.parse(localStorage.getItem("user")) 

// Looping - 
for(i=0; i<localStorage.length; i++){
    let key = localStorage.key(i);
    alert(`${key} : ${localStorage.getItem(key)}`)
}
// For in Loop, iterates over keys but also outputs few built-in fields that we dont want so Solution is-
for (const key in localStorage) {
    alert(key)
}
for (const key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
        continue; 
    }
    alert(key)
}