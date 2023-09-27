// Optional Chaining ?. is a safe way to access nested object properties, Even if an intermediate property doesn't exist.

// The Optional Chaining stops the evaluation if the value Before ?. is undefined or null and returns undefined.

// NOTE  - If we try to access a property which is not defined inside the object, the output shows 'undefined'.

let key = "contact"
const user = {
    name : "VivekKumarShah",
    address : {
        HouseNo : "B-729",
        City : "Nigahi",
        state : "Madhya Pradesh",
        // When Treat comment when we deal with dynamic
        // contact : {
        //     email : "vivekkushah@gmail.com",
        //     mobile : 6260264382
        // }
    },
    getBranch(){
        console.log("ComputerScience&Engineering")
    }
}
console.log(user.address.state) //Madhya Pradesh 
console.log(user.address.pin) //undefined

console.log(user.address.pin.pincode) //ERROR Cannot read properties of undefined (reading 'pincode')
console.log(user.address.pin?.pincode)


// When We Deal With Function

console.log(user.getBranch());

console.log(user.DemoFunction?.()); // Optional Chaining when we used with function we just need to use optional chaining just before executing the function.

console.log(user.address[key]?.email)

// We can not use optional chaining while we are assigning,wee can only use while accesssing or deleting.
user?.occupation = "Govt Employee";

// Array ---
// Note - If we try to access array elements by using out of range index than we will get undefined value and we wont get any error 
const arr = [
    {name:"VivekKuShah",branch:"CSE"},
    {name:"IndraKuShah",Branch:"ECE"}
];
console.log(arr[2]?.name)
