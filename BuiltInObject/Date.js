// In JS Month Starts With 0-Jan, 1-Feb, 2-March......

// Day also starts with 0-6, 0-Sun,1-Mon

let currentDate = new Date()

console.log(currentDate) // Sun Sep 17 2023 15:34:13 GMT+0530 (India Standard Time), Current Time

console.log(typeof currentDate) // Object 

console.log(currentDate.toString()) // Sun Sep 17 2023 15:34:13 GMT+0530 (India Standard Time)

console.log(typeof (currentDate.toString())) // string





let currDate = new Date()
console.log(currDate) // Sun Sep 17 2023 16:26:16 GMT+0530 (India Standard Time)

console.log(currDate.getTime()) // 1694948107469
// getTime() returns the number of milliseconds since January 1, 1970 00:00:00 to Current Date and Time


// The setTime() method sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.
// Adding 1 Day MiliSecond in Current
console.log(currDate.setTime(currDate.getTime() + 24 * 60 * 60 * 1000)) //1695034546017

console.log(currDate) //Mon Sep 18 2023 16:27:40 GMT+0530 (India Standard Time)

console.log(currDate.toString()) //In String Format
console.log(currDate.toUTCString()) //in UTC Format





const launchDate = new Date('July 1, 1999, 12:00:00');
console.log(launchDate)
console.log(launchDate.getTime())

console.log(launchDate.setTime(launchDate.getTime() + 1000))
console.log(launchDate.getTime())


console.log(currentDate.getFullYear()) //YEAR ---> 2023

console.log(currentDate.getMonth() + 1) //Month Starts with 0, So we need to add + 1 ---> 9

console.log(currentDate.getDate()) //Date ---> 17

// -------------------------------------------------------------------------------------------

console.log(currentDate.setTime())

