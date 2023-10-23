let str = "This is Vivek Kumar shah";
console.log(str.split(" "))

let arrayOfSen = str.split(" ")
let returnValue = arrayOfSen.map((sentence)=>{
    return sentence.split("").reverse().join("")
})
console.log(returnValue.join(" "))

