// Object Literal - First Way Of Creating Object in JS.
const user = {
    firstName: "VivekKumar",
    lastName: "Shah",
    address: {
        city: "Nigahi",
        state: "Madhya Pradesh",
        country: "India"
    },
    123: "OneTWoThree",
    "key with Space": "Key With Space",
    demoFun() {
        console.log(`My First Name ${user.firstName} and last name ${user.lastName}`)
    }
}

// Accessing Object Propert by ( . ) or [ ]
console.log(user.firstName);
console.log(user.demoFun());

// If the name of the key is Number or not a string and Key has Space-seperated strings than we must have to use ["key"] 
console.log(user["20"]);
console.log(user["key with space"]);

// Adding or Modifying Object property
user.addingProperty = "Added new key & value";
user.firstName = "modifying existing key, value"

// Dynamically Adding key : value 
let keyPartOne= "keyFirstName";
let value = "Vivek";
let keyPartTwo = "keyLastName";
let keyValue = "Shah"
const dynamicObj = {
    keyPartOne: value,
    [keyPartTwo]: keyValue
}
console.log(dynamicObj);
// Value Section works Fine But Property Not Get It Values So We Have To Wrap With [ ] 

// Object With Same Property Name
const duplicateKey = {
    a: "One",
    b: "Two",
    a: "Three"
}
console.log(duplicatePropertyObject.a);
// If We Have Keys With The Same Name Than First Key Value Will Replaced and It Will Still Be In the First Postion With The Last Specified Value.

// Cons -  If we have to create lots of object(same property and method) than using literal it is difficult or time consuming. (Here we not follow DRY concept that is do not repeat)