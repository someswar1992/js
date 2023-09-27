// The in operator returns true if the specified property is in the specified object or its prototype chain.
const user = {
    firstName: "VivekKumar",
    lastName: "Shah",
    address: {
        city: "Nigahi",
        state: "Madhya Pradesh",
        country: "India"
    },
    123: "OneTWoThree",
    "key with Space": "Key With Space"
}
console.log("address" in user) //true

console.log(["key with Space"] in user) //true

// Cheking behaviour of "in" prototype
const parentObjectProperty = {
    clg: "MITM"
}
const childObjectProperty = {
    name: "VivekKuShah",
    branch: "CSE"
}
Object.setPrototypeOf(demoChild, parent);
console.log("clg" in childObjectProperty); //Gives true means cheks in prototype also.
console.log("hasOwnProperty" in childObjectProperty);

// ---------------------------------------------------

/*The Object.hasOwn() method returns true if the specified property is a direct property of the object — even if the property value is null or undefined.
The method returns false if the property is inherited, or has not been declared at all.
Unlike the in operator, this method does not check for the specified property in the object's prototype chain. 
*/
const obj = {
    name: "VivekKuShah",
    branch: "CSE"
};
Object.hasOwn(obj, "name"); // true
Object.hasOwn(obj, "hasOwnProperty"); // Inherited not checks gives, false.

const demoO = {
    undefined: "name",
    branch: null
}
console.log("name" in demoO)