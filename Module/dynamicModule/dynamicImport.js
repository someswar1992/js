import {} from "./exportFile.js";
//It works in this way, first going to download dynamicImport.js file that we mentioned in html page and than immediately its going to download exportFile.js as soon as page load

import * as moduleBasic from "./exportFile.js";
console.log(moduleBasic)

/*
The import() syntax, commonly called dynamic import, is a function-like expression that allows loading an ECMAScript module asynchronously and dynamically into a potentially non-module environment.

Returns a promise which fulfills to a module namespace object: an object containing all exports from moduleName.
*/

import("./exportFile.js")
.then((dynamicModule)=>{
    console.log(dynamicModule)
    console.log(moduleBasic===dynamicModule)
    console.log(dynamicModule.default())
})


// We need to destructure and rename the "default" key from the returned object.
// import("./exportFile.js")
// .then(( {default:Show, username} )=>{
//     console.log(username);
//     console.log(Show);
//     Show();
// })