// These Methods Create an iterable Object (for example Array,Strings) from the Objects -

const object = {
    indra:"IPS Lecturer",
    vikas:"Indian Railway",
    vivek:"Atomic Energy Dept",
    manoj:"Job Seeker"
}

// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
let getKeyfromObject = Object.keys(object);
console.log(getKeyfromObject) //[ "indra", "vikas", "vivek", "manoj" ]

// The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
let getValuesfromObject = Object.values(object);
console.log(getValuesfromObject) //[ "IPS Lecturer", "Indian Railway", "Atomic Energy Dept", "Job Seeker" ]

let getBoth = Object.entries(object)
console.log(getBoth);
/*
[Array(2), Array(2), Array(2), Array(2)]
0: Array [ "indra", "IPS Lecturer" ]
1: Array [ "vikas", "Indian Railway" ]
2: Array [ "vivek", "Atomic Energy Dept" ]
3: Array [ "manoj", "Job Seeker" ]
*/
console.log(getBoth[2][1])