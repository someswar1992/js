// Creating Demo Promise Object
const demoPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        firstName: "Vivek",
        lastName: "Shah",
        branch: "ComputerScience&Engineering",
        email: "vivekkushah@gmail.com",
        brothers: ["IndraKumarShah", "VikasKumarShah", "ManojKumarShah"],
      },
    ]);
  }, 5000);
});

demoPromise
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
// In case if promise is rejected than catch will executed.

// fetch("Url") - It returns promise object
const promise = fetch("https://fakestoreapi.com/products");
promise
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

/* Prerequisite -
The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
Return value - 
A Promise that resolves to a JavaScript object. This object could be anything that can be represented by JSON — an object, an array, a string, a number…
*/
const pro = fetch("https://fakestoreapi.com/products");
pro
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((formatofData) => {
    console.log(formatofData);
  })
  .catch((err) => {
    console.log(err);
  });
