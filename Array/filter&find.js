// The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array.

// callbackFn is invoked only for array indexes which have assigned values.
const filterArr = [10, , 4, 50, 60, 11, 110, 100];
let result = filterArr.filter((element, index) => {
    console.log("Visit", index)
    return element > 50 && element < 110;
})
console.log(result)

// Real-Life exmaple 
let array = [ {name:"VivekKumarShah"},{name:"IndraKumarShah"},{name:"VikasKumarShah"},{name:"ManojKumarShah"}]
let filterObject = array.filter(function filtering(object){
    // return true; The given Expression if returns true, than object is returnd.
    return object.name.includes("Vi")

})
console.log(filterObject)

// The find method returns the value of the first element in the provided array that satisfies the provided condition, Otherwise undefined is returned.
const findArrr = [10, 15, 130, 44];
let findReturn = findArrr.find((element, index) => {
    console.log("visit", index);
    return element > 15
});
console.log(findReturn);


// findIndex() is as same as find() the differernce is only it returns index not value.
const findIndex = [10, 15, 130, 44];
let returnIndex = findIndex.findIndex((element, index) => {
    return element > 15
});
console.log(returnIndex);