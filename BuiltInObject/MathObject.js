// Math is Built in Object-
console.log(Math);
console.log(typeof Math);

// Usefull property and methods of Math -

const PI = Math.PI;
console.log(PI); // 3.141592653589793

// toFixed() - 
const fixing = PI.toFixed(2);
console.log(fixing);
console.log(typeof fixing) //String

// If the fractional portion of the argument is greater than 0.5, the argument is rounded to the integer with the next higher absolute value. If it is less than 0.5, the argument is rounded to the integer with the lower absolute value. 
console.log(Math.round(PI)) // 3

// always floor
console.log(Math.floor(PI));

// always ciel
console.log(Math.ceil(PI));

const minimum = Math.min(50,60,70,80,10)
console.log(minimum) //10

const maximum = Math.max(50,60,70,80,10)
console.log(maximum) //10

//The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1. (Means A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).)
const randomNum = Math.random();
const num = Math.floor(randomNum*10);
console.log(num)

// OTP Generator -
function OTPgenerator(){
    var lengthOTP = 6;
    var OTP = "";
    for(let i=0; i<lengthOTP; i++){
        OTP += Math.floor(Math.random()*10)
    }
    return OTP;
}
let OTPReceieved = OTPgenerator();
console.log(OTPReceieved, typeof OTPReceieved);
// Convert into Number
let OTPReceievedInNumber = +OTPReceieved
console.log(OTPReceievedInNumber, typeof OTPReceievedInNumber);


