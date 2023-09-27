// The Destructuring assignment syntax is a JS expression that makes it possible to unpack values from arrays, or property from object into distinct variables.

const myDetails = ["VivekKumar", "Shah", 6260264382, "CSE"];
const [firstName, , mobile, branch,Course] = myDetails;
console.log(firstName);
console.log(mobile);
console.log(branch);

// Destructuring with more elements than the source
console.log(Course); //undefined

// On the fly destructuring 
function onTheFlyDes([first,second,third]){ //destructured
    console.log(first,second,third)
}
onTheFlyDes([10,20,30]) //Passing an array