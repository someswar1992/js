// Declaring Array (Array literal notation )
const arr = [080, "vivek", 59];
console.log(typeof arr);
console.log(arr);
console.log(arr.length);
console.log(arr[5])

// by length propeerty we can increase or decrease the size of array.
arr.length = 2
console.log(arr) //[80, 'vivek']

arr.length = 10;
console.log(arr) //[80, 'vivek', empty × 8]
console.log(arr[5]) //undefined
arr[5] = "kumar";
console.log(arr[5])
console.log(arr)


// Creating array - The Array() constructor creates Array objects.

let arrayWithElements = new Array("element0", "element1") //put any number of elements
console.log(array)

/* Array constructor with a single parameter - 
Arrays can be created using a constructor with a single number parameter. An array is created with its length property set to that number, and the array elements are empty slots.
*/
let arrayWithoutElem = new Array(10);
console.log(arrayWithoutElem) //[empty × 10]



//***Note: Array() can be called with or without new. Both create a new Array instance.

let arrayWithElementsNonew = Array("element0", "element1") //put any number of elements
console.log(arrayWithElementsNonew) //['element0', 'element1']

let arrayWithoutElemNonwe = Array(10);
console.log(arrayWithoutElemNonwe) //[empty × 10]

/* Fill() - The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array
fill(value)
fill(value, start)
fill(value, start, end)  fills up to but not including end.

The fill() method is a mutating method. It does not alter the length of this, but it will change the content of this.
*/
Array(10).fill(5) //[5, 5, 5, 5, 5, 5, 5, 5, 5, 5]