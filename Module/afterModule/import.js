//We import non Default thing we need to put them { }, we import showuserdetails from export.js
import { showuserdetails } from "./export.js";

export function ImImportingaOtherFunction(){
    console.log("I'm a function, in which another imported function(showuserdetails) is called and I'm also exported");
    showuserdetails();
}